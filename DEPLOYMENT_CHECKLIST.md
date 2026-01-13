# 🚀 Deployment Checklist - Netlify Forms Migration

## Pre-Deployment ✅

- [x] Code changes completed
- [x] Build successful (no errors)
- [x] TypeScript compilation passed
- [x] Development server tested
- [x] Documentation created

## Deployment Steps

### 1. Commit and Push Changes
```bash
git status
git add .
git commit -m "feat: Migrate contact form from SMTP to Netlify Forms

- Replace API route with Netlify Forms submission
- Add hidden form for bot detection
- Update form submission to use URL-encoded data
- Add comprehensive documentation
- Remove dependency on nodemailer

Benefits:
- No SMTP credentials needed
- Built-in spam protection
- Automatic email notifications via Netlify UI
- Zero configuration in code"

git push origin main
```

- [ ] Changes committed
- [ ] Changes pushed to repository
- [ ] Netlify build triggered automatically

### 2. Monitor Netlify Build

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select your site
3. Navigate to **Deploys** tab
4. Watch build progress

**Expected Output:**
```
✓ Build successful
✓ Forms detected: 1 form(s) found
  - contact
✓ Deploy complete
```

- [ ] Build completed successfully
- [ ] No build errors
- [ ] Form detected in build log

### 3. Enable Form Detection

1. In Netlify Dashboard, go to **Site Settings** → **Forms**
2. Check if **Form detection** is enabled
3. If disabled, click **Enable form detection**
4. If you just enabled it, redeploy:
   ```bash
   # Trigger new deploy
   git commit --allow-empty -m "chore: trigger deploy for form detection"
   git push origin main
   ```

- [ ] Form detection enabled
- [ ] (If needed) Redeployed after enabling

### 4. Verify Form in Dashboard

1. Go to **Site Settings** → **Forms**
2. Look for **Active forms** section
3. Confirm `contact` form is listed

**What you should see:**
```
Active forms (1)
┌──────────┬────────────────────┬──────────────┐
│ Name     │ Submissions        │ Last submit  │
├──────────┼────────────────────┼──────────────┤
│ contact  │ 0 submissions      │ Never        │
└──────────┴────────────────────┴──────────────┘
```

- [ ] `contact` form appears in Active forms
- [ ] Form shows "0 submissions" (before testing)

### 5. Configure Email Notifications

1. Go to **Site Settings** → **Forms** → **Form notifications**
2. Click **Add notification**
3. Select **Email notification**
4. Fill in details:
   - **Event to listen for**: New form submission
   - **Form**: `contact`
   - **Email to notify**: `marketing@coral.lk`
   - **Email subject line**: `New Contact Form Submission - Coral Property Developers`
   - **Custom email body** (optional):
     ```
     New contact form submission received:

     Name: {{ fullName }}
     Email: {{ email }}
     Subject: {{ subject }}
     Message: {{ message }}

     Submitted at: {{ created_at }}
     View all submissions: {{ form_url }}
     ```
5. Click **Save**

- [ ] Email notification created
- [ ] Notification points to `contact` form
- [ ] Email address is `marketing@coral.lk`
- [ ] Subject line is descriptive

### 6. Test Form Submission

1. Visit your deployed site: `https://your-site.netlify.app/ContactUs`
2. Fill out the contact form with test data:
   - **Full Name**: Test User
   - **Email**: your-test-email@example.com
   - **Subject**: Test Submission
   - **Message**: This is a test submission to verify Netlify Forms integration
3. Click **Send Message**
4. Verify success message appears

**Expected Result:**
```
✓ Success message: "Thank you for your message! We will get back to you soon."
```

- [ ] Form submitted successfully
- [ ] Success message displayed
- [ ] No console errors
- [ ] Form fields cleared after submission

### 7. Verify Submission in Dashboard

1. Go to **Site Settings** → **Forms** → Click `contact` form
2. You should see your test submission
3. Click on the submission to view details

**What to check:**
- [ ] Submission appears in list
- [ ] Timestamp is correct
- [ ] All fields captured correctly:
  - [ ] fullName
  - [ ] email
  - [ ] subject
  - [ ] message
- [ ] Spam score shown (should be low)

### 8. Verify Email Notification

1. Check inbox for `marketing@coral.lk`
2. Look for email with subject: "New Contact Form Submission - Coral Property Developers"
3. Verify email contains:
   - Sender information
   - All form fields
   - Submission timestamp
   - Link to view in dashboard

**If email not received:**
- [ ] Check spam/junk folder
- [ ] Verify notification configuration
- [ ] Wait 2-3 minutes (email might be delayed)
- [ ] Try submitting another test form

- [ ] Email notification received
- [ ] Email contains all form data
- [ ] Email format is readable

### 9. Production Validation

Submit 2-3 more test forms with different data to ensure consistency:

**Test Case 1**: Minimum valid input
- Name: Jo
- Email: a@b.co
- Subject: Hi
- Message: Ten chars.

**Test Case 2**: Maximum length input
- Name: [100 characters]
- Email: [valid long email]
- Subject: [200 characters]
- Message: [2000 characters]

**Test Case 3**: International characters
- Name: José María
- Email: test@例え.jp
- Subject: Привет
- Message: Testing unicode ñ ü ö 你好

- [ ] All test cases submitted successfully
- [ ] All submissions visible in dashboard
- [ ] All email notifications received
- [ ] Form validation working correctly

## Post-Deployment Cleanup (Optional)

### 10. Remove Old SMTP Environment Variables

1. Go to **Site Settings** → **Environment variables**
2. Delete the following (if they exist):
   - SMTP_HOST
   - SMTP_PORT
   - SMTP_USER
   - SMTP_PASSWORD
   - SMTP_FROM_EMAIL
   - COMPANY_EMAIL
   - ADMIN_EMAIL

- [ ] Old environment variables removed

### 11. Remove Old Files (Optional - After Confirming Everything Works)

Create a new branch for cleanup:
```bash
git checkout -b cleanup/remove-smtp-files

# Remove old API routes
rm src/app/api/contact/route.ts
rm src/app/api/admin/test-smtp/route.ts
rm -rf src/app/api/admin

# Remove email service
rm -rf src/lib/email

# Uninstall dependencies
npm uninstall nodemailer @types/nodemailer

git add .
git commit -m "chore: remove old SMTP-related files and dependencies"
git push origin cleanup/remove-smtp-files
```

Then create a PR and merge after testing.

- [ ] Old API route files removed
- [ ] Email service folder removed
- [ ] nodemailer packages uninstalled
- [ ] Cleanup branch merged

## Advanced Configuration (Optional)

### 12. Add reCAPTCHA (Recommended for Spam Protection)

1. Get reCAPTCHA v2 keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. In the hidden form, add:
   ```html
   <div data-netlify-recaptcha="true"></div>
   ```
3. In the visible form, add before submit button:
   ```jsx
   <div data-netlify-recaptcha="true"></div>
   ```
4. In Netlify: **Site Settings** → **Forms** → **Form notifications** → **reCAPTCHA**
5. Add site key and secret key
6. Redeploy site

- [ ] reCAPTCHA configured (optional)

### 13. Set Up Webhook (Optional)

For integrations like Slack, Discord, or custom API:

1. **Site Settings** → **Forms** → **Form notifications**
2. **Add notification** → **Outgoing webhook**
3. Enter webhook URL
4. Configure event: New form submission
5. Save

- [ ] Webhook configured (optional)

## Monitoring

### 14. Regular Checks

Set calendar reminders to check:

**Weekly:**
- [ ] Check form submissions in dashboard
- [ ] Review spam scores
- [ ] Verify email notifications working

**Monthly:**
- [ ] Review usage: **Site Settings** → **Forms** → **Usage**
- [ ] Export submissions to CSV for records
- [ ] Check if approaching limits (100/month free tier)

## Rollback Plan (If Issues Occur)

If you need to revert:

1. **Keep old files temporarily** - Don't delete API routes immediately
2. **Revert form submission**:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```
3. **Restore SMTP environment variables**
4. **Redeploy**

- [ ] Rollback plan understood
- [ ] Old files kept for 30 days (recommended)

## Troubleshooting Reference

Quick fixes for common issues:

| Issue | Solution |
|-------|----------|
| Form returns 404 | Enable form detection and redeploy |
| No email received | Check spam folder, verify notification config |
| Form not in dashboard | Check hidden form has `data-netlify="true"` |
| Validation not working | Check browser console for JS errors |
| Spam submissions | Enable reCAPTCHA v2 |

## Documentation

After deployment, share these docs with your team:

- 📋 [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - Overview of changes
- 🚀 [NETLIFY_FORMS_QUICKSTART.md](./NETLIFY_FORMS_QUICKSTART.md) - Quick reference
- 📖 [NETLIFY_FORMS_SETUP.md](./NETLIFY_FORMS_SETUP.md) - Comprehensive guide
- 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md) - Architecture comparison

- [ ] Team notified of changes
- [ ] Documentation shared

## Sign-Off

**Deployed By**: _________________
**Date**: _________________
**Netlify Site URL**: _________________
**Deployment ID**: _________________

**Verification:**
- [ ] All checklist items completed
- [ ] Form tested and working
- [ ] Email notifications configured and tested
- [ ] Documentation reviewed
- [ ] Team informed

## Success Criteria

✅ **Deployment successful when:**
1. Form detected in Netlify dashboard
2. Test submission appears in dashboard
3. Email notification received
4. No console errors on production
5. Form validation working correctly
6. Success/error messages displaying properly

---

**Status**: Ready for Deployment ✅
**Last Updated**: January 12, 2026

**Need Help?**
- Check [NETLIFY_FORMS_SETUP.md](./NETLIFY_FORMS_SETUP.md) troubleshooting section
- Visit [Netlify Support](https://www.netlify.com/support/)
- Contact development team
