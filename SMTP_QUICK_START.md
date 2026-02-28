# 📧 SMTP Setup Quick Start

## 3 Easy Steps

### Step 1: Get Gmail App Password
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer"
3. Copy the 16-character password generated

### Step 2: Update `.env.local`
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx
SMTP_FROM=noreply@is2.shivai.co.in
LEAD_NOTIFICATION_TO=Hospitality.is2@shivai.co.in
LEAD_NOTIFICATION_CC=founders@shivai.co.in
```

### Step 3: Test It
1. Run: `npm run dev`
2. Submit a test lead form
3. Check console for: `✅ Email sent successfully`
4. Verify email in inbox (check spam folder too)

---

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| "Authentication failed" | Use 16-char **app password**, not your account password |
| "SMTP credentials not configured" | Make sure `.env.local` exists and restart dev server |
| "Connection timeout" | Check SMTP_HOST (gmail = `smtp.gmail.com`) and SMTP_PORT (usually 587) |
| Emails in spam | Check sender reputation, add SPF/DKIM records |

---

## Alternative SMTP Providers

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxx...
```

### AWS SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASSWORD=your-password
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASSWORD=your-password
```

---

## See Full Guide
Read `SMTP_SETUP.md` for detailed documentation and troubleshooting.
