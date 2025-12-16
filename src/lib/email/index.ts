/**
 * Email Module
 *
 * Public API for email functionality.
 * Re-exports types and functions needed by other parts of the application.
 */

export { processContactForm, verifySmtpConnection } from "./service";
export type { EmailResult, ContactEmailResult } from "./service";
export type { ContactFormData } from "./templates";
