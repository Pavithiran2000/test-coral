# Coral Web - Netlify Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. Environment Variables (REQUIRED)
Set these in **Netlify Dashboard → Site settings → Build & deploy → Environment variables**:

#### SMTP Configuration (Gmail Example)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
SMTP_FROM_EMAIL=noreply@coral.lk
SMTP_FROM_NAME=Coral Property Developers
```

#### Email Recipients
```
COMPANY_EMAIL=marketing@coral.lk
ADMIN_EMAIL=admin@gmail.com
```
> ⚠️ **Note**: `ADMIN_EMAIL` is optional. If set, admin will receive BCC copies of all contact form submissions.

#### Admin Tools (Optional but Recommended)
```
ADMIN_SECRET=your-random-secret-here
```
> Used to protect the `/api/admin/test-smtp` endpoint for testing SMTP in production.

---

## 🔐 Gmail Setup (Important!)

If using Gmail for SMTP, you **MUST** use an App Password (not your regular password):

### Steps to Generate Gmail App Password:
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (required for App Passwords)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select **"Mail"** and your device
5. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)
6. Use this as `SMTP_PASSWORD` in Netlify (remove spaces: `abcdefghijklmnop`)

### Alternative: Use a Transactional Email Service
For better deliverability and reliability, consider:
- **SendGrid** (12,000 free emails/month)
- **Mailgun** (5,000 free emails/month)
- **Postmark** (100 free emails/month)
- **Resend** (3,000 free emails/month)

---

## 🚀 Netlify Deployment Steps

### 1. Connect GitHub Repository
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select your `coral-web` repository

### 2. Build Settings (Auto-detected from netlify.toml)
Netlify will read your `netlify.toml` file:
```
Build command: npm run build
Publish directory: .next
Node version: 20
```

### 3. Set Environment Variables
1. Go to **Site settings → Build & deploy → Environment variables**
2. Click **"Add a variable"** for each env var listed above
3. ⚠️ **DO NOT** store secrets in your git repository or `.env.local`

### 4. Deploy Site
1. Click **"Deploy site"**
2. Wait for build to complete (~2-5 minutes)
3. Your site will be live at `https://your-site-name.netlify.app`

### 5. Custom Domain (Optional)
1. Go to **Site settings → Domain management**
2. Add your custom domain (e.g., `coral.lk`)
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic via Let's Encrypt)

---

## 🧪 Testing in Production

### Test SMTP Configuration
Use the protected admin endpoint to verify SMTP works in production:

```bash
curl -X GET https://your-site.netlify.app/api/admin/test-smtp \
  -H "x-admin-secret: your-admin-secret"
```

**Expected Response (Success):**
```json
{
  "success": true,
  "message": "SMTP connection verified successfully",
  "config": {
    "host": "smtp.gmail.com",
    "port": "587",
    "secure": false,
    "user": "your-email@gmail.com",
    "fromEmail": "noreply@coral.lk",
    "companyEmail": "marketing@coral.lk",
    "adminEmail": "admin@gmail.com"
  }
}
```

### Test Contact Forms
1. Go to your deployed site
2. Submit the **Contact Us** form
3. Submit the **FAQ** form
4. Verify emails arrive at:
   - `COMPANY_EMAIL` (notification)
   - `ADMIN_EMAIL` (BCC copy, if set)
   - Submitter's email (auto-reply)

---

## 🔧 Troubleshooting

### Issue: Emails Not Sending

**Check:**
1. All env vars are set in Netlify (not just `.env.local`)
2. Gmail App Password is correct (16 chars, no spaces)
3. SMTP_USER matches the Gmail account
4. Run the `/api/admin/test-smtp` endpoint to diagnose

**Common Errors:**
- `535 Authentication failed` → Wrong password or need App Password
- `Connection refused` → Wrong SMTP_HOST or SMTP_PORT
- `Message rejected` → Invalid FROM email or SPF/DKIM issues

### Issue: Build Fails

**Check:**
1. `npm run build` works locally
2. Node version matches (20) in `netlify.toml`
3. All dependencies in `package.json`
4. No TypeScript/ESLint errors

### Issue: Forms Submit But No Email

**Check:**
1. Browser console for API errors
2. Netlify Function logs: **Site → Functions → contact**
3. Email service logs (check spam folder)
4. Run SMTP test endpoint

---

## 📊 Monitoring

### Netlify Dashboard
- **Deploys**: View build logs and deploy history
- **Functions**: Monitor API route invocations and errors
- **Analytics**: Track site traffic (requires paid plan)

### Email Logs
- Check your `COMPANY_EMAIL` and `ADMIN_EMAIL` inboxes
- Monitor spam folders (especially for first few emails)
- Consider setting up SPF/DKIM for `coral.lk` domain

---

## 🎯 Production Best Practices

### Security
- ✅ Never commit secrets to git
- ✅ Use strong `ADMIN_SECRET` for admin endpoints
- ✅ Keep dependencies updated (`npm audit fix`)
- ✅ Enable Netlify's security headers (already configured)

### Performance
- ✅ Use Netlify Image CDN (automatic for next/image)
- ✅ Enable edge caching (configured in netlify.toml)
- ✅ Monitor Core Web Vitals

### Reliability
- ✅ Set up Netlify Deploy Notifications (Slack/Email)
- ✅ Use branch deploys for testing
- ✅ Configure deploy previews for pull requests

---

## 📞 Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Gmail SMTP Guide](https://support.google.com/mail/answer/7126229)
- [Netlify Community Forum](https://answers.netlify.com/)

---

## 🔄 Continuous Deployment

Once set up, every push to your `main` branch will:
1. Trigger a new build on Netlify
2. Run `npm run build`
3. Deploy to production automatically
4. Update your live site in ~2-5 minutes

**Branch Deploys**: Push to other branches for preview deploys at `branch-name--your-site.netlify.app`

---

**Last Updated**: December 2025
