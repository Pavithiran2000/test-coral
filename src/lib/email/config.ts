import "server-only";

/**
 * Email Configuration
 *
 * Centralized configuration for SMTP email service.
 * All values are loaded from environment variables for security.
 */

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: {
    email: string;
    name: string;
  };
  companyEmail: string;
}

/**
 * Result of environment variable validation
 */
export interface ValidationResult {
  isValid: boolean;
  missingVars: string[];
}

/**
 * Validates that all required environment variables are set
 * @returns ValidationResult with isValid flag and list of missing variables
 */
export function validateEnvVariables(): ValidationResult {
  const requiredVars = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASSWORD",
    "SMTP_FROM_EMAIL",
    "COMPANY_EMAIL",
  ];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  return {
    isValid: missingVars.length === 0,
    missingVars,
  };
}

/**
 * Get the email configuration from environment variables
 * @returns EmailConfig object with all SMTP settings
 * @throws Error if required environment variables are missing
 */
export function getEmailConfig(): EmailConfig {
  const validation = validateEnvVariables();

  if (!validation.isValid) {
    const errorMessage = `Missing required environment variables: ${validation.missingVars.join(
      ", "
    )}. Please check your .env.local file.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return {
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT!, 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASSWORD!,
    },
    from: {
      email: process.env.SMTP_FROM_EMAIL!,
      name: process.env.SMTP_FROM_NAME || "Coral Property Developers",
    },
    companyEmail: process.env.COMPANY_EMAIL!,
  };
}
