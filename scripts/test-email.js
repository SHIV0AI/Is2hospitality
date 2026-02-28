#!/usr/bin/env node

/**
 * Email Configuration   // Verify connection
  try {
    console.log('🔗 Verifying SMTP Connection...');
    await transporter.verify();
    console.log('✅ SMTP Connection Verified!\n');
  } catch (error) {
    console.log(`❌ SMTP Connection Failed: ${error.message}\n`);
    console.log('📋 Error Details:');
    console.log(`   Code: ${error.code || 'N/A'}`);
    console.log(`   Response: ${error.response || 'N/A'}`);
    console.log('\n❓ Troubleshooting for Zoho Mail:');
    console.log('   1. Verify credentials: SMTP_USER must be your full Zoho email address');
    console.log('   2. Check if SMTP is enabled in Zoho Mail settings');
    console.log('   3. Verify the password is correct (not account password, use SMTP-specific password if available)');
    console.log('   4. Check if your Zoho account has SMTP access enabled');
    console.log('   5. Try the standard Zoho SMTP server: smtp.zoho.com (port 465)');
    process.exit(1);
  } This script tests if your SMTP configuration is correct without needing
 * to submit a form. Great for debugging email issues.
 * 
 * Usage: node scripts/test-email.js
 */

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

const testEmail = async () => {
  console.log('🔍 Testing Email Configuration...\n');

  // Check environment variables
  console.log('📋 Checking Environment Variables:');
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM'];
  let allSet = true;

  required.forEach(env => {
    const value = process.env[env];
    const status = value ? '✅' : '❌';
    const display = value ? (env.includes('PASSWORD') ? '***' : value) : 'NOT SET';
    console.log(`${status} ${env}: ${display}`);
    if (!value) allSet = false;
  });

  if (!allSet) {
    console.log('\n❌ Missing required environment variables!');
    console.log('Please update .env.local with your SMTP credentials.\n');
    process.exit(1);
  }

  // Create transporter
  console.log('\n📧 Creating SMTP Transporter...');
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Verify connection
  try {
    console.log('🔗 Verifying SMTP Connection...');
    await transporter.verify();
    console.log('✅ SMTP Connection Verified!\n');
  } catch (error) {
    console.log(`❌ SMTP Connection Failed: ${error.message}\n`);
    console.log('Common issues:');
    console.log('- Gmail: Use 16-char app password, not account password');
    console.log('- Gmail: Enable 2-Factor Authentication first');
    console.log('- Other: Check SMTP_HOST, SMTP_PORT, and credentials');
    process.exit(1);
  }

  // Send test email
  try {
    console.log('📤 Sending Test Email...');
    const testTo = process.env.LEAD_NOTIFICATION_TO || 'test@example.com';
    
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: testTo,
      subject: '✅ IS2 Hospitality - Email Configuration Test',
      html: `
        <h2>✅ Email Configuration Test Successful!</h2>
        <p>This confirms that your SMTP settings are working correctly.</p>
        <h3>Configuration Details:</h3>
        <ul>
          <li><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</li>
          <li><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</li>
          <li><strong>From:</strong> ${process.env.SMTP_FROM}</li>
          <li><strong>Sent To:</strong> ${testTo}</li>
          <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        <p>You can now submit leads through your form and they will receive email notifications.</p>
      `
    });

    console.log(`✅ Test Email Sent Successfully!`);
    console.log(`📨 Message ID: ${info.messageId}`);
    console.log(`\n📍 Check your inbox at: ${testTo}`);
    console.log('(Check spam folder if not found)\n');
  } catch (error) {
    console.log(`❌ Failed to Send Test Email: ${error.message}\n`);
    process.exit(1);
  }
};

// Run the test
testEmail().catch(error => {
  console.error('❌ Test Failed:', error);
  process.exit(1);
});
