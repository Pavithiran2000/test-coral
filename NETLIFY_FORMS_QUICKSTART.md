# Quick Start - Netlify Forms Configuration

## Immediate Actions Required

### 1. Deploy to Netlify
```bash
git add .
git commit -m "Migrate contact form to Netlify Forms"
git push origin main
```

### 2. Enable Form Detection (After Deploy)
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select your site → **Site Settings** → **Forms**
3. Click **Enable form detection**
4. Wait for next deploy or redeploy manually

### 3. Configure Email Notifications
1. **Site Settings** → **Forms** → **Form notifications**
2. Click **Add notification** → **Email notification**
3. Settings:
   - **Form**: `contact`
   - **Email**: `marketing@coral.lk`
   - **Subject**: `New Contact Form - Coral Property Developers`
4. **Save**

### 4. Test the Form
1. Visit your deployed site's contact page
2. Submit a test form
3. Verify:
   - ✅ Success message appears
   - ✅ Form appears in Netlify **Forms** dashboard
   - ✅ Email notification received

## Configuration Checklist

- [ ] Code deployed to Netlify
- [ ] Form detection enabled in Netlify UI
- [ ] Email notification configured
- [ ] Test form submitted successfully
- [ ] Email notification received
- [ ] Old SMTP environment variables removed (optional)

## Environment Variables to Remove (Optional)

These are no longer needed:
```
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
SMTP_FROM_EMAIL
COMPANY_EMAIL
ADMIN_EMAIL
```

Remove in: **Site Settings** → **Environment variables**

## Viewing Form Submissions

**Netlify Dashboard:**
- **Site Settings** → **Forms** → Active forms → Click `contact`
- Export to CSV available

**API Access:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.netlify.com/api/v1/forms/FORM_ID/submissions
```

## Common Issues

### Form Returns 404
- ✅ **In Development**: Expected - Netlify Forms only work on deployed sites
- ❌ **In Production**: Check form detection is enabled, then redeploy

### No Email Received
1. Check spam folder
2. Verify notification is configured correctly
3. Confirm submission appears in Netlify Forms dashboard

### Form Not Showing in Dashboard
1. Verify `data-netlify="true"` in hidden form
2. Ensure form has `name="contact"`
3. Redeploy site

## Need More Details?

See [NETLIFY_FORMS_SETUP.md](./NETLIFY_FORMS_SETUP.md) for comprehensive guide including:
- Architecture details
- Advanced features (webhooks, reCAPTCHA)
- Troubleshooting
- Rollback instructions

## Support

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Netlify Support](https://www.netlify.com/support/)
- [Community Forums](https://answers.netlify.com/)
