# SMTP Email Setup Guide for IS2 Hospitality

## Overview
This guide explains how to configure SMTP for sending lead notification emails from your IS2 Hospitality & Tourism platform.

## Environment Configuration

### 1. Update `.env.local` File

The `.env.local` file has been created in your project root with the following variables:

```env
# Email Configuration for Lead Notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@is2.shivai.co.in

# Lead Email Recipients
LEAD_NOTIFICATION_TO=Hospitality.is2@shivai.co.in
LEAD_NOTIFICATION_CC=founders@shivai.co.in

# Environment
NODE_ENV=development
```

### 2. Configure SMTP Credentials

#### Option A: Gmail (Recommended for Quick Setup)

1. **Enable 2-Factor Authentication**:
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Enable "2-Step Verification"

2. **Create App Password**:
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password

3. **Update `.env.local`**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx  (your 16-char app password)
   SMTP_FROM=your-email@gmail.com
   ```

#### Option B: Gmail with Custom Domain

If using a Google Workspace account with your domain:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@is2.shivai.co.in
SMTP_PASSWORD=your-16-char-app-password
SMTP_FROM=noreply@is2.shivai.co.in
```

#### Option C: Other SMTP Providers

**SendGrid:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxx...
SMTP_FROM=noreply@is2.shivai.co.in
```

**AWS SES:**
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_FROM=noreply@is2.shivai.co.in
```

**Mailgun:**
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASSWORD=your-mailgun-password
SMTP_FROM=noreply@is2.shivai.co.in
```

### 3. Configure Email Recipients

Update the email recipients in `.env.local`:

```env
LEAD_NOTIFICATION_TO=primary-email@company.com
LEAD_NOTIFICATION_CC=cc-email@company.com
```

Or keep the default:
```env
LEAD_NOTIFICATION_TO=Hospitality.is2@shivai.co.in
LEAD_NOTIFICATION_CC=founders@shivai.co.in
```

## Email Implementation Details

### What Was Added

1. **Nodemailer Integration** (`app/api/leads/route.js`):
   - Configured SMTP transporter
   - HTML email template for lead notifications
   - Error handling and logging

2. **Email Template**:
   - Professional, branded email design
   - All lead information formatted nicely
   - Lead ID and timestamp included
   - Next steps guidance for sales team

3. **Features**:
   - ✅ Automatic lead notifications
   - ✅ CC field for multiple recipients
   - ✅ Reply-To field set to lead's email
   - ✅ Formatted HTML emails with styling
   - ✅ Graceful error handling

## Testing the Configuration

### 1. Start Development Server
```bash
npm run dev
```

### 2. Submit a Test Lead
- Navigate to the contact form on your website
- Fill in all required fields
- Submit the form

### 3. Check Console Logs
Look for one of these messages:
- **Success**: `✅ Email sent successfully: <message-id>`
- **Error**: `❌ Error sending email: <error-message>`
- **Warning**: `⚠️ SMTP credentials not configured...`

### 4. Verify Email Received
- Check your inbox at the email address specified in `LEAD_NOTIFICATION_TO`
- Check spam folder if not in inbox
- Verify all lead data is formatted correctly

## Troubleshooting

### "SMTP credentials not configured"
- Ensure `.env.local` file exists in project root
- Check that `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASSWORD` are set
- Restart the dev server after updating `.env.local` (it auto-reloads but restart ensures clean state)

### "Authentication failed"
- **Gmail**: Verify you used the 16-character **app password** (not your account password)
- **Gmail**: Ensure 2-Factor Authentication is enabled
- **Gmail**: Verify the email address is correct
- **Other**: Check provider documentation for correct credentials

### "Connection timeout"
- Verify SMTP_HOST is correct for your provider
- Check SMTP_PORT (usually 587 for TLS, 465 for SSL)
- For Gmail: use port 587 with TLS
- Check firewall/network restrictions

### "Emails going to spam"
- Add SPF record to your domain DNS
- Add DKIM signature from your email provider
- Set proper Reply-To header (already done)
- Use professional email template (already implemented)

### "No emails being sent but no errors"
- Check if credentials are marked as "not configured" in console
- Verify environment variables are accessible (add logging if needed)
- Ensure form validation passes
- Check that nodemailer was installed: `npm list nodemailer`

## Production Deployment

### Important Security Notes

1. **Never commit `.env.local`** to git
2. **Use environment variables** on your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - Other: Follow your platform's documentation

3. **Recommended approach**:
   - Store production credentials in your hosting platform's environment variable system
   - Never hardcode sensitive information
   - Rotate credentials periodically

### Example for Vercel

```bash
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASSWORD
vercel env add SMTP_FROM
vercel env add LEAD_NOTIFICATION_TO
vercel env add LEAD_NOTIFICATION_CC
```

## Email Customization

### To modify the email template:
Edit the `generateLeadEmailHTML()` function in `app/api/leads/route.js`

### To change email recipients programmatically:
Modify `EMAIL_CONFIG` object at the top of `app/api/leads/route.js`

### To add more fields to the email:
1. Add the field to the `LeadForm` component
2. Add a corresponding section in `generateLeadEmailHTML()` function

## Next Steps

1. ✅ Set up SMTP credentials in `.env.local`
2. ✅ Test with a form submission
3. ✅ Verify email is received
4. ✅ Deploy to production with environment variables
5. ✅ Monitor lead submissions and responses

## Support & Resources

- **Nodemailer Documentation**: https://nodemailer.com/
- **Gmail App Passwords**: https://support.google.com/accounts/answer/185833
- **SendGrid SMTP**: https://docs.sendgrid.com/for-developers/sending-email/integrations
- **AWS SES**: https://docs.aws.amazon.com/ses/latest/dg/send-email.html

---

**Last Updated**: February 28, 2026
**Platform**: IS2 Hospitality & Tourism (Next.js 16.1.6)
