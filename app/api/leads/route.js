import { NextResponse } from 'next/server';

// Email Configuration
const EMAIL_CONFIG = {
  to: 'Hospitality.is2@shivai.co.in',
  cc: 'founders@shivai.co.in',
  from: 'noreply@is2.shivai.co.in'
};

// In a real application, you would save this to a database and send emails
// For email functionality, integrate with a service like:
// - SendGrid (npm install @sendgrid/mail)
// - Mailjet (npm install node-mailjet)
// - Nodemailer (npm install nodemailer)
// - AWS SES, or similar

async function sendLeadNotificationEmail(formData) {
  // TODO: Implement email sending with your preferred service
  // Example with SendGrid:
  // const msg = {
  //   to: EMAIL_CONFIG.to,
  //   cc: EMAIL_CONFIG.cc,
  //   from: EMAIL_CONFIG.from,
  //   subject: `New Lead: ${formData.firstName} ${formData.lastName}`,
  //   html: `<h2>New Lead Submission</h2><p>Name: ${formData.firstName} ${formData.lastName}</p>...`
  // };
  // await sgMail.send(msg);
  
  console.log('Lead notification should be sent to:', EMAIL_CONFIG.to, 'CC:', EMAIL_CONFIG.cc);
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
      await sendLeadNotificationEmail(data);
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
