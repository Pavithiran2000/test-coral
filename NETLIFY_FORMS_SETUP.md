# Netlify Forms Setup Guide

## Overview
This project has been migrated from SMTP-based email submission to Netlify Forms for serverless form handling. Netlify Forms eliminates the need for backend API routes, SMTP configuration, and provides a built-in spam filtering and notification system.

## What Changed

### Before (SMTP-based)
- Used custom API route at `/api/contact/route.ts`
- Required Nodemailer package and SMTP server credentials
- Complex email templating system
- Environment variables for SMTP configuration
- Manual error handling and email delivery management

### After (Netlify Forms)
- Direct form submission to Netlify's infrastructure
- No SMTP credentials or API routes needed
- Built-in spam protection with reCAPTCHA support
- Email notifications configured through Netlify UI
- Automatic form data storage and CSV export

## Architecture Changes

### 1. Contact Form (`src/app/ContactUs/page.tsx`)
- **Removed**: API call to `/api/contact`
- **Added**: Hidden HTML form for Netlify bot detection
- **Updated**: Form submission now POSTs to `/` with URL-encoded data
- **Retained**: All client-side validation using Formik

### 2. Form Submission Process
```javascript
// New submission function
async function submitContactForm(values: ContactFormValues) {
  const formData = new FormData();
  formData.append("form-name", "contact");
  formData.append("fullName", values.fullName);
  formData.append("email", values.email);
  formData.append("subject", values.subject);
  formData.append("message", values.message);

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  });

  return response.ok;
}
```

### 3. Hidden Form for Bot Detection
Required for React/Next.js applications because Netlify needs to detect forms during the build process:

```html
<form name="contact" data-netlify="true" hidden>
  <input type="text" name="fullName" />
  <input type="email" name="email" />
  <input type="text" name="subject" />
  <textarea name="message"></textarea>
</form>
```

**Why is this needed?**
- Netlify scans HTML at build time to detect forms
- React components render client-side, so they're invisible during build
- The hidden form ensures Netlify knows about your form structure

## Configuration Steps

### Step 1: Enable Form Detection in Netlify

1. Log in to your Netlify dashboard
2. Navigate to your site
3. Go to **Site Settings** → **Forms**
4. Click **Enable form detection** (if not already enabled)
5. Deploy your site

### Step 2: Configure Email Notifications

To receive form submissions via email:

1. In Netlify dashboard, go to **Site Settings** → **Forms**
2. Click **Form notifications** tab
3. Click **Add notification** button
4. Select **Email notification**
5. Configure:
   - **Event to listen for**: New form submission
   - **Form**: `contact` (your form name)
   - **Email to notify**: `marketing@coral.lk` (or your preferred email)
   - **Email subject line**: `New Contact Form Submission from Coral Property Developers`
6. Save the notification

### Step 3: View Form Submissions

Access submissions in two ways:

**Via Netlify UI:**
1. Go to **Site Settings** → **Forms** → **Active forms**
2. Click on the `contact` form
3. View all submissions with timestamps, user data, and spam score
4. Export submissions as CSV

**Via Netlify API:**
```bash
# Get all submissions
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.netlify.com/api/v1/forms/FORM_ID/submissions
```

### Step 4: Optional - Add Spam Protection

#### reCAPTCHA v2 (Recommended)
1. Get reCAPTCHA keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. In the hidden form, add:
   ```html
   <div data-netlify-recaptcha="true"></div>
   ```
3. Add to the visible form section in JSX:
   ```jsx
   <div data-netlify-recaptcha="true"></div>
   ```
4. Configure reCAPTCHA keys in Netlify:
   - Go to **Site Settings** → **Forms** → **Form notifications**
   - Add your reCAPTCHA site key and secret key

#### Honeypot (Already Enabled)
Netlify automatically adds a honeypot field to catch bots. No action needed.

## Files Modified

### Modified Files
1. **`src/app/ContactUs/page.tsx`**
   - Updated `submitContactForm` function
   - Added hidden form for Netlify detection
   - Changed submission endpoint and encoding

2. **`netlify.toml`**
   - Added forms configuration documentation

### Files You Can Optionally Remove

The following files are no longer needed but kept for reference:

1. **`src/app/api/contact/route.ts`** - Old API route (can be deleted)
2. **`src/app/api/admin/test-smtp/route.ts`** - SMTP test endpoint (can be deleted)
3. **`src/lib/email/`** - Entire email service folder:
   - `config.ts`
   - `service.ts`
   - `templates.ts`
   - `index.ts`

### Dependencies You Can Remove

Update `package.json` to remove:
```bash
npm uninstall nodemailer @types/nodemailer
```

These packages are no longer needed:
- `nodemailer`: ^7.0.11
- `@types/nodemailer`: ^7.0.4

## Testing

### Local Testing (Development)

**Important:** Netlify Forms only work on deployed sites. In development:

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Test the form - you'll see form submission but:
   - Forms won't actually be captured by Netlify
   - No email notifications will be sent
   - Response will be 404 (expected in dev mode)

3. Handle dev mode gracefully:
   ```javascript
   // The form will return 404 in dev, which is expected
   // Consider adding a dev mode flag to show appropriate messages
   ```

### Production Testing (Netlify Deploy)

1. **Deploy to Netlify:**
   ```bash
   git add .
   git commit -m "Migrate to Netlify Forms"
   git push origin main
   ```

2. **Verify Form Detection:**
   - Go to Netlify Dashboard → **Forms**
   - Look for "Active forms" section
   - Confirm `contact` form appears after deploy

3. **Submit Test Form:**
   - Visit your deployed site
   - Navigate to Contact page
   - Fill out and submit the form
   - Verify success message appears

4. **Check Submissions:**
   - Netlify Dashboard → **Forms** → Click `contact`
   - Verify your test submission appears
   - Check the data is captured correctly

5. **Test Email Notifications:**
   - Submit another test form
   - Check if notification email arrives at `marketing@coral.lk`
   - Verify email contains all form fields

### Staging Environment Testing

For thorough testing without affecting production:

1. Create a branch deploy:
   ```bash
   git checkout -b test-netlify-forms
   git push origin test-netlify-forms
   ```

2. Netlify automatically creates a branch deploy
3. Test on the branch URL: `test-netlify-forms--your-site.netlify.app`
4. Form submissions on branch deploys go to the same form inbox

## Troubleshooting

### Form Not Detected After Deploy

**Problem:** Form doesn't appear in Netlify Forms UI

**Solutions:**
1. Verify hidden form has `data-netlify="true"` attribute
2. Ensure hidden form has `name="contact"` attribute
3. Check all input fields have unique `name` attributes
4. Verify form detection is enabled in Netlify UI
5. Redeploy the site after making changes

### Form Submission Returns 404

**Problem:** Form submission fails with 404 error

**Solutions:**
1. **In Development**: This is expected - Netlify Forms only work on deployed sites
2. **In Production**: 
   - Check the form `name` attribute matches the hidden form
   - Verify `form-name` is being sent in the POST body
   - Ensure Content-Type header is `application/x-www-form-urlencoded`
   - Check Network tab to see exact request being sent

### No Email Notifications

**Problem:** Form submissions work but no emails are received

**Solutions:**
1. Verify email notification is configured in Netlify UI
2. Check spam/junk folder
3. Verify correct email address in notification settings
4. Check Netlify Forms UI to confirm submission was received
5. Test with different email addresses

### Spam Submissions

**Problem:** Receiving spam form submissions

**Solutions:**
1. Enable reCAPTCHA v2 (see Step 4 above)
2. Check spam scores in Netlify Forms UI
3. Use Akismet integration (available in paid plans)
4. Enable Netlify's built-in spam filtering (automatic)

### Form Validation Not Working

**Problem:** Form submits without validation

**Solutions:**
1. Client-side validation (Formik) is retained - check browser console
2. Add `noValidate` attribute to form to prevent HTML5 validation
3. Ensure validation errors are displayed correctly
4. Test with JavaScript disabled to verify HTML5 fallback

## Environment Variables

### Variables No Longer Needed

The following environment variables from SMTP setup can be removed from Netlify:

```bash
# These are no longer needed:
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
SMTP_FROM_EMAIL
COMPANY_EMAIL
ADMIN_EMAIL
```

To remove them:
1. Netlify Dashboard → **Site Settings** → **Environment variables**
2. Delete the above variables
3. Redeploy if necessary

### No New Variables Required

Netlify Forms requires **zero configuration** via environment variables. Everything is managed through the Netlify UI.

## Advanced Features

### 1. Custom Success Page

Update form to redirect to custom page:

```jsx
const formik = useFormik({
  onSubmit: async (values, { resetForm }) => {
    const result = await submitContactForm(values);
    if (result.success) {
      // Redirect to custom thank you page
      window.location.href = "/thank-you";
    }
  }
});
```

### 2. Form Analytics

Track form submissions with Google Analytics:

```javascript
// After successful submission
if (window.gtag) {
  window.gtag('event', 'form_submission', {
    'form_name': 'contact',
    'form_location': '/ContactUs'
  });
}
```

### 3. Webhook Notifications

Send form data to external services:

1. Netlify Dashboard → **Site Settings** → **Forms** → **Form notifications**
2. Click **Add notification** → **Outgoing webhook**
3. Enter webhook URL (e.g., Slack, Discord, custom API)
4. Netlify will POST form data as JSON

Example webhook payload:
```json
{
  "form_name": "contact",
  "data": {
    "fullName": "John Doe",
    "email": "john@example.com",
    "subject": "Question about property",
    "message": "I'm interested in..."
  },
  "created_at": "2026-01-12T10:30:00Z",
  "human_fields": {
    "Full Name": "John Doe",
    "Email": "john@example.com"
  }
}
```

### 4. Form-Triggered Functions

Create serverless functions that run when forms are submitted:

1. Create function file: `netlify/functions/form-handler.js`
```javascript
exports.handler = async (event) => {
  const payload = JSON.parse(event.body);
  
  // Custom logic: Send to CRM, Slack notification, etc.
  console.log('New form submission:', payload.data);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Processed' })
  };
};
```

2. Configure in Netlify UI:
   - **Site Settings** → **Forms** → **Form notifications**
   - **Add notification** → **Function**
   - Select your function

## Benefits of Migration

### ✅ Simplified Architecture
- No backend API routes to maintain
- No SMTP server configuration
- No email template management
- Reduced code complexity

### ✅ Enhanced Security
- No SMTP credentials to protect
- Built-in spam protection
- Automatic rate limiting
- No email injection vulnerabilities

### ✅ Better Reliability
- Netlify handles delivery
- 99.9% uptime SLA
- Automatic retries on failure
- Built-in monitoring

### ✅ Improved Features
- View submissions in dashboard
- Export to CSV
- Email notifications without code
- Webhook integrations
- Spam scoring
- File uploads support (up to 8MB)

### ✅ Cost Effective
- Free tier: 100 submissions/month
- No additional email service costs
- No server maintenance

## Netlify Forms Limits

### Free Plan
- 100 form submissions per month per site
- Form data stored for 1 month
- Basic spam filtering
- Email notifications included

### Pro Plan
- 1,000 submissions per month per site
- Additional submissions: $19 per 1,000
- Form data stored indefinitely
- Advanced spam filtering (Akismet)
- Priority support

### Current Usage
Check usage in Netlify Dashboard:
- **Site Settings** → **Forms** → **Usage and configuration**
- Shows submissions used this month
- Alerts when approaching limit

## Migration Checklist

- [x] Update ContactUs page form submission
- [x] Add hidden form for Netlify detection
- [x] Update netlify.toml with forms documentation
- [x] Create setup guide (this file)
- [ ] Deploy to Netlify
- [ ] Enable form detection in Netlify UI
- [ ] Configure email notifications
- [ ] Test form submission on deployed site
- [ ] Verify email notifications received
- [ ] Remove old SMTP environment variables
- [ ] (Optional) Delete old API route files
- [ ] (Optional) Uninstall nodemailer packages
- [ ] Update team documentation

## Support Resources

### Netlify Documentation
- [Forms Setup](https://docs.netlify.com/forms/setup/)
- [Form Submissions](https://docs.netlify.com/forms/submissions/)
- [Form Notifications](https://docs.netlify.com/forms/notifications/)
- [Spam Filters](https://docs.netlify.com/forms/spam-filters/)
- [Troubleshooting](https://docs.netlify.com/forms/troubleshooting-tips/)

### Next.js Specific
- [Netlify Next.js Runtime](https://docs.netlify.com/frameworks/next-js/)
- [Next.js Forms Example](https://github.com/netlify/next-runtime/tree/main/demos/default/pages)

### Community Support
- [Netlify Community Forums](https://answers.netlify.com/)
- [Netlify Support](https://www.netlify.com/support/)

## Rollback Plan

If issues arise, you can temporarily rollback:

1. **Keep Old Files**: Don't delete the old API route and email service files immediately

2. **Revert Form Submission**:
   ```javascript
   // Change back to:
   const response = await fetch("/api/contact", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(values),
   });
   ```

3. **Remove Hidden Form**: Delete the hidden Netlify form

4. **Restore SMTP Variables**: Re-add environment variables in Netlify

5. **Redeploy**: Push changes and redeploy

## Questions?

For any issues or questions about this migration:
1. Check this guide's Troubleshooting section
2. Review Netlify Forms documentation
3. Contact the development team
4. Open an issue in the repository

---

**Last Updated:** January 12, 2026
**Version:** 1.0.0
**Author:** GitHub Copilot
