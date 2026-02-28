import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email Configuration from environment variables
const EMAIL_CONFIG = {
  to: process.env.LEAD_NOTIFICATION_TO || 'Hospitality.is2@shivai.co.in',
  cc: process.env.LEAD_NOTIFICATION_CC || 'founders@shivai.co.in',
  from: process.env.SMTP_FROM || 'noreply@is2.shivai.co.in'
};

// Create SMTP transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

// Generate HTML email template for lead notification
const generateLeadEmailHTML = (formData, leadId) => {
  const interestsList = formData.interests && formData.interests.length > 0 
    ? formData.interests.join(', ') 
    : 'Not specified';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #d4af37; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
        .lead-id { background: #fff3cd; padding: 10px; border-left: 4px solid #d4af37; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">🎉 New Lead Submission</h2>
          <p style="margin: 5px 0 0 0;">IS2 Hospitality & Tourism Platform</p>
        </div>
        
        <div class="content">
          <div class="lead-id">
            <strong>Lead ID:</strong> ${leadId}<br>
            <strong>Submitted:</strong> ${new Date().toLocaleString()}
          </div>

          <div class="field">
            <span class="label">Name:</span><br>
            ${formData.firstName} ${formData.lastName}
          </div>

          <div class="field">
            <span class="label">Email:</span><br>
            <a href="mailto:${formData.email}">${formData.email}</a>
          </div>

          <div class="field">
            <span class="label">Phone:</span><br>
            ${formData.phone}
          </div>

          <div class="field">
            <span class="label">Company:</span><br>
            ${formData.company}
          </div>

          <div class="field">
            <span class="label">Industry:</span><br>
            ${formData.industry.charAt(0).toUpperCase() + formData.industry.slice(1).replace('-', ' ')}
          </div>

          ${formData.propertyName ? `
          <div class="field">
            <span class="label">Property Name:</span><br>
            ${formData.propertyName}
          </div>
          ` : ''}

          ${formData.propertyType ? `
          <div class="field">
            <span class="label">Property Type:</span><br>
            ${formData.propertyType}
          </div>
          ` : ''}

          ${formData.rooms ? `
          <div class="field">
            <span class="label">Number of Rooms:</span><br>
            ${formData.rooms}
          </div>
          ` : ''}

          ${formData.currentSystem ? `
          <div class="field">
            <span class="label">Current System:</span><br>
            ${formData.currentSystem}
          </div>
          ` : ''}

          <div class="field">
            <span class="label">Interests:</span><br>
            ${interestsList}
          </div>

          ${formData.budget ? `
          <div class="field">
            <span class="label">Budget Range:</span><br>
            ${formData.budget}
          </div>
          ` : ''}

          ${formData.message ? `
          <div class="field">
            <span class="label">Message:</span><br>
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              <strong>Next Steps:</strong><br>
              • Review the lead details above<br>
              • Contact the lead within 24 hours<br>
              • Log the interaction in your CRM<br>
              • Follow up based on their interests
            </p>
          </div>
        </div>

        <div class="footer">
          <p style="margin: 0;">IS2 Hospitality & Tourism | Powered by Shiv.ai</p>
          <p style="margin: 5px 0 0 0;">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

async function sendLeadNotificationEmail(formData, leadId) {
  try {
    // Check if SMTP credentials are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn('⚠️  SMTP credentials not configured. Email will not be sent.');
      console.warn('Please set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env.local');
      return;
    }

    const transporter = createTransporter();

    // Verify connection
    await transporter.verify();

    const mailOptions = {
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      cc: EMAIL_CONFIG.cc,
      subject: `🎉 New Lead: ${formData.firstName} ${formData.lastName} - ${formData.company}`,
      html: generateLeadEmailHTML(formData, leadId),
      replyTo: formData.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields from form
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'industry'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const leadId = `IS2-${Date.now()}`;

    // Log the lead (in production, save to database)
    console.log('New Lead Received:', {
      leadId,
      timestamp: new Date().toISOString(),
      ...data
    });

    // Send notification email to sales team
    try {
      await sendLeadNotificationEmail(data, leadId);
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Don't fail the request if email fails - lead is still recorded
    }

    // TODO: In production, also:
    // 1. Save to database
    // 2. Add to CRM
    // 3. Trigger automation workflows

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your interest! Our team will contact you within 24 hours.',
      leadId,
      notificationSent: {
        to: EMAIL_CONFIG.to,
        cc: EMAIL_CONFIG.cc
      }
    });

  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while submitting your request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IS2 Hospitality & Tourism - Lead API',
    version: '1.0',
    endpoints: {
      POST: '/api/leads - Submit a new lead'
    }
  });
}
