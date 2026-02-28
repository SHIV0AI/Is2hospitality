#!/usr/bin/env node

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

console.log('\n🔍 ZOHO MAIL SMTP DEBUG\n');
console.log('Environment Variables:');
console.log(`SMTP_HOST: ${process.env.SMTP_HOST}`);
console.log(`SMTP_PORT: ${process.env.SMTP_PORT}`);
console.log(`SMTP_USER: ${process.env.SMTP_USER}`);
console.log(`SMTP_PASSWORD length: ${process.env.SMTP_PASSWORD ? process.env.SMTP_PASSWORD.length : 'NOT SET'}`);
console.log(`SMTP_FROM: ${process.env.SMTP_FROM}\n`);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  logger: true,
  debug: true
});

transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Verification Failed:', error);
  } else {
    console.log('✅ Verification Successful!');
  }
  process.exit(error ? 1 : 0);
});
