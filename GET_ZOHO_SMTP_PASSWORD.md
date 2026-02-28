# 🔐 Zoho Mail SMTP Authentication Guide

## Current Issue: 535 Authentication Failed

Your SMTP configuration is **almost complete**, but the password authentication is failing. This means the password `eskhVhLErF8b` is **not** the correct SMTP password for the `SMTP-SHIVAI` app.

---

## How to Get the Correct SMTP Password from Zoho Mail

### Step 1: Log into Zoho Mail
Go to: https://mail.zoho.com

### Step 2: Access SMTP Settings
**Method A (If available):**
1. Click **Settings** (gear icon in top right)
2. Go to **Mail accounts** or **Accounts**
3. Look for **SMTP** or **SMTP Credentials** section
4. Find the password field

**Method B (If using Zoho Admin):**
1. Go to Zoho Admin Center
2. Go to **Mail** → **Users**
3. Select the user
4. Look for **SMTP Settings** or **Authentication Settings**

### Step 3: Identify Your SMTP Password
There might be multiple passwords:
- **Account Password**: Your login password (❌ DON'T use for SMTP)
- **SMTP Password**: Specific password for email clients (✅ USE THIS)
- **App Password**: Generated password for third-party apps (✅ OR THIS)

### Step 4: Copy the Correct Password
Look for one that says:
- "SMTP Password"
- "Mail Client Password"
- "Application Password"
- Or a generated token for `SMTP-SHIVAI`

### Step 5: Update `.env.local`

Replace the password with the one you find:

```env
# Email Configuration for Lead Notifications
# Zoho Mail SMTP Configuration (Free Organization)
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=SMTP-SHIVAI
SMTP_PASSWORD=YOUR-ACTUAL-ZOHO-SMTP-PASSWORD-HERE
SMTP_FROM=Hospitality.is2@shivai.co.in
```

### Step 6: Test Again
```bash
npm run test:email
```

---

## Possible Password Formats

The password from Zoho Mail might be:
- A 32-character string (most common)
- A shorter password (8-16 chars)
- A UUID format
- A random alphanumeric string

**Example formats:**
```
✅ Valid:
- a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
- SMTP1234567890ABCDEF
- 123e4567-e89b-12d3-a456-426614174000
```

---

## Troubleshooting Checklist

Before testing, verify:

- [ ] You're using the **SMTP-specific password** (not your account password)
- [ ] Password is copied **exactly** (no spaces before/after)
- [ ] SMTP username is `SMTP-SHIVAI`
- [ ] SMTP host is `smtp.zoho.com`
- [ ] Port is `587` (TLS) or `465` (SSL)
- [ ] Account is **active** and not suspended
- [ ] SMTP access is **enabled** in Zoho Mail settings

---

## Quick Reference: Current Configuration

```
SMTP_HOST:     smtp.zoho.com
SMTP_PORT:     587 (or 465 for SSL)
SMTP_USER:     SMTP-SHIVAI
SMTP_PASSWORD: ❌ NEEDS VERIFICATION (currently fails)
SMTP_FROM:     Hospitality.is2@shivai.co.in
```

---

## What NOT to Do

❌ Use your Zoho Mail login password
❌ Use your account password
❌ Make up a password
❌ Copy a password from another email client
❌ Use spaces or special characters outside the password

---

## If You Still Can't Find It

**Contact Zoho Support:**
1. Go to Zoho Mail → Help/Support
2. Describe: "I need my SMTP password for SMTP-SHIVAI app"
3. They can provide the correct credentials

**Or Reset SMTP Password:**
Some Zoho accounts allow you to reset/regenerate SMTP password:
1. Settings → Mail Accounts
2. Look for "Reset SMTP Password" option
3. Generate a new one and use that

---

## Expected Output When Password is Correct

```
🔍 Testing Email Configuration...

📋 Checking Environment Variables:
✅ SMTP_HOST: smtp.zoho.com
✅ SMTP_PORT: 587
✅ SMTP_USER: SMTP-SHIVAI
✅ SMTP_PASSWORD: ***
✅ SMTP_FROM: Hospitality.is2@shivai.co.in

📧 Creating SMTP Transporter...
🔗 Verifying SMTP Connection...
✅ SMTP Connection Verified!

📤 Sending Test Email...
✅ Test Email Sent Successfully!
📨 Message ID: <messageId>

Check your inbox at: Hospitality.is2@shivai.co.in
(Check spam folder if not found)
```

---

## Next Steps

1. ✅ Find the correct SMTP password in Zoho Mail
2. ✅ Update `SMTP_PASSWORD=` in `.env.local`
3. ✅ Run `npm run test:email` to verify
4. ✅ Once successful, form submissions will auto-send emails

---

**📞 Need help?** The issue is definitely the SMTP password. Double-check Zoho Mail settings for the `SMTP-SHIVAI` app credentials.
