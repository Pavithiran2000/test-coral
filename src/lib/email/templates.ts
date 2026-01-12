/**
 * Email Templates
 * 
 * HTML and text templates for contact form emails.
 * Includes both notification email to company and auto-reply to customer.
 */

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Generate HTML email template for company notification
 */
export function getCompanyNotificationHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0E1B41; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                New Contact Form Submission
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.5;">
                You have received a new message from the contact form on your website.
              </p>
              
              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                    <strong style="color: #0E1B41; display: inline-block; width: 120px;">Name:</strong>
                    <span style="color: #333333;">${escapeHtml(data.fullName)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                    <strong style="color: #0E1B41; display: inline-block; width: 120px;">Email:</strong>
                    <a href="mailto:${escapeHtml(data.email)}" style="color: #00A6E2; text-decoration: none;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                    <strong style="color: #0E1B41; display: inline-block; width: 120px;">Subject:</strong>
                    <span style="color: #333333;">${escapeHtml(data.subject)}</span>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="background-color: #f8f9fa; border-left: 4px solid #00A6E2; padding: 20px; border-radius: 0 8px 8px 0;">
                <strong style="color: #0E1B41; display: block; margin-bottom: 10px;">Message:</strong>
                <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
              
              <!-- Reply Button -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${escapeHtml(data.email)}?subject=Re: ${encodeURIComponent(data.subject)}" 
                   style="display: inline-block; background-color: #00A6E2; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Reply to ${escapeHtml(data.fullName)}
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; color: #666666; font-size: 13px;">
                This email was sent from the contact form on coral.lk
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate plain text email for company notification
 */
export function getCompanyNotificationText(data: ContactFormData): string {
  return `
NEW CONTACT FORM SUBMISSION
============================

You have received a new message from the contact form on your website.

CONTACT DETAILS
---------------
Name: ${data.fullName}
Email: ${data.email}
Subject: ${data.subject}

MESSAGE
-------
${data.message}

---
This email was sent from the contact form on coral.lk
  `.trim();
}

/**
 * Generate HTML auto-reply email for customer
 */
export function getAutoReplyHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0E1B41; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                Thank You for Contacting Us
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Dear <strong>${escapeHtml(data.fullName)}</strong>,
              </p>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Thank you for reaching out to Coral Property Developers. We have received your message and appreciate you taking the time to contact us.
              </p>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Our team will review your inquiry and get back to you as soon as possible, typically within 1-2 business days.
              </p>
              
              <!-- Message Summary -->
              <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px; color: #0E1B41; font-size: 16px;">Your Message Summary:</h3>
                <p style="margin: 0 0 8px; color: #666666; font-size: 14px;">
                  <strong>Subject:</strong> ${escapeHtml(data.subject)}
                </p>
                <p style="margin: 0; color: #666666; font-size: 14px; white-space: pre-wrap;">
                  <strong>Message:</strong><br>${escapeHtml(data.message)}
                </p>
              </div>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                If you have any urgent inquiries, please feel free to call us at <strong>0112 596 235</strong>.
              </p>
              
              <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #0E1B41;">The Coral Property Developers Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Contact Info -->
          <tr>
            <td style="background-color: #0E1B41; padding: 30px 40px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center; color: #ffffff;">
                    <p style="margin: 0 0 10px; font-size: 14px;">
                      <strong>Coral Property Developers</strong>
                    </p>
                    <p style="margin: 0 0 5px; font-size: 13px; color: #cccccc;">
                      No 42, Ridgeway Place, Colombo 04
                    </p>
                    <p style="margin: 0 0 5px; font-size: 13px; color: #cccccc;">
                      Phone: 0112 596 235 | Email: marketing@coral.lk
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; color: #999999; font-size: 12px;">
                This is an automated response. Please do not reply directly to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate plain text auto-reply email for customer
 */
export function getAutoReplyText(data: ContactFormData): string {
  return `
Dear ${data.fullName},

Thank you for reaching out to Coral Property Developers. We have received your message and appreciate you taking the time to contact us.

Our team will review your inquiry and get back to you as soon as possible, typically within 1-2 business days.

YOUR MESSAGE SUMMARY
--------------------
Subject: ${data.subject}

Message:
${data.message}

If you have any urgent inquiries, please feel free to call us at 0112 596 235.

Best regards,
The Coral Property Developers Team

---
CORAL PROPERTY DEVELOPERS
No 42, Ridgeway Place, Colombo 04
Phone: 0112 596 235
Email: marketing@coral.lk

This is an automated response. Please do not reply directly to this email.
  `.trim();
}

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}
