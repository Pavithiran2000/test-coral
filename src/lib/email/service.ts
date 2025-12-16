/**
 * Email Service
 *
 * Handles all email sending operations using Nodemailer.
 * Provides methods for sending contact form notifications and auto-replies.
 */

import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { getEmailConfig, type EmailConfig } from "./config";
import {
  getCompanyNotificationHtml,
  getCompanyNotificationText,
  getAutoReplyHtml,
  getAutoReplyText,
  type ContactFormData,
} from "./templates";

/**
 * Email sending result
 */
export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Contact form email result (includes both notification and auto-reply)
 */
export interface ContactEmailResult {
  notification: EmailResult;
  autoReply: EmailResult;
}

/**
 * Create a Nodemailer transporter with the configured SMTP settings
 */
function createTransporter(config: EmailConfig): Transporter {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass,
    },
  });
}

/**
 * Send notification email to company about new contact form submission
 */
async function sendCompanyNotification(
  transporter: Transporter,
  config: EmailConfig,
  data: ContactFormData
): Promise<EmailResult> {
  try {
    const info = await transporter.sendMail({
      from: `"${config.from.name}" <${config.from.email}>`,
      to: config.companyEmail,
      ...(process.env.ADMIN_EMAIL && { bcc: process.env.ADMIN_EMAIL }),
      replyTo: data.email,
      subject: `New Contact Form: ${data.subject}`,
      text: getCompanyNotificationText(data),
      html: getCompanyNotificationHtml(data),
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Failed to send company notification:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Send auto-reply email to customer
 */
async function sendAutoReply(
  transporter: Transporter,
  config: EmailConfig,
  data: ContactFormData
): Promise<EmailResult> {
  try {
    const info = await transporter.sendMail({
      from: `"${config.from.name}" <${config.from.email}>`,
      to: data.email,
      subject: `Thank you for contacting Coral Property Developers`,
      text: getAutoReplyText(data),
      html: getAutoReplyHtml(data),
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Failed to send auto-reply:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Process contact form submission
 * Sends both notification to company and auto-reply to customer
 */
export async function processContactForm(
  data: ContactFormData
): Promise<ContactEmailResult> {
  const config = getEmailConfig();
  const transporter = createTransporter(config);

  // Verify SMTP connection before sending
  try {
    await transporter.verify();
  } catch (error) {
    console.error("SMTP connection verification failed:", error);
    const errorMessage =
      error instanceof Error ? error.message : "SMTP connection failed";
    return {
      notification: { success: false, error: errorMessage },
      autoReply: { success: false, error: errorMessage },
    };
  }

  // Send both emails concurrently
  const [notification, autoReply] = await Promise.all([
    sendCompanyNotification(transporter, config, data),
    sendAutoReply(transporter, config, data),
  ]);

  return { notification, autoReply };
}

/**
 * Verify SMTP configuration is working
 * Useful for testing connection without sending emails
 */
export async function verifySmtpConnection(): Promise<boolean> {
  try {
    const config = getEmailConfig();
    const transporter = createTransporter(config);
    await transporter.verify();
    return true;
  } catch (error) {
    console.error("SMTP verification failed:", error);
    return false;
  }
}
