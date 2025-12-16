/**
 * Contact Form API Route
 *
 * Handles POST requests from the contact form.
 * Validates input, sends notification email, and auto-reply.
 */

import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form data interface
 */
interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Validation error response
 */
interface ValidationError {
  field: string;
  message: string;
}

/**
 * API response types
 */
interface SuccessResponse {
  success: true;
  message: string;
}

interface ErrorResponse {
  success: false;
  message: string;
  errors?: ValidationError[];
}

type ApiResponse = SuccessResponse | ErrorResponse;

/**
 * Validate contact form data
 */
function validateFormData(data: unknown): {
  isValid: boolean;
  errors: ValidationError[];
  formData?: ContactFormData;
} {
  const errors: ValidationError[] = [];

  // Check if data is an object
  if (!data || typeof data !== "object") {
    return {
      isValid: false,
      errors: [{ field: "body", message: "Invalid request body" }],
    };
  }

  const body = data as Record<string, unknown>;

  // Validate fullName
  if (
    !body.fullName ||
    typeof body.fullName !== "string" ||
    !body.fullName.trim()
  ) {
    errors.push({ field: "fullName", message: "Full name is required" });
  }

  // Validate email
  if (!body.email || typeof body.email !== "string" || !body.email.trim()) {
    errors.push({ field: "email", message: "Email address is required" });
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(body.email)) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    });
  }

  // Validate subject
  if (
    !body.subject ||
    typeof body.subject !== "string" ||
    !body.subject.trim()
  ) {
    errors.push({ field: "subject", message: "Subject is required" });
  }

  // Validate message
  if (
    !body.message ||
    typeof body.message !== "string" ||
    !body.message.trim()
  ) {
    errors.push({ field: "message", message: "Message is required" });
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    formData: {
      fullName: (body.fullName as string).trim(),
      email: (body.email as string).trim().toLowerCase(),
      subject: (body.subject as string).trim(),
      message: (body.message as string).trim(),
    },
  };
}

/**
 * POST /api/contact
 *
 * Process contact form submission
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    // Parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Validate form data
    const validation = validateFormData(body);
    if (!validation.isValid || !validation.formData) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Dynamically import email service to catch any initialization errors
    let processContactForm;
    try {
      const emailModule = await import("@/lib/email");
      processContactForm = emailModule.processContactForm;
    } catch (importError) {
      console.error("Failed to load email module:", importError);
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong. Please contact support.",
        },
        { status: 500 }
      );
    }

    // Process contact form (send emails)
    const result = await processContactForm(validation.formData);

    // Check if at least the notification was sent successfully
    if (!result.notification.success) {
      console.error(
        "Failed to send contact form notification:",
        result.notification.error
      );
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send your message. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Log if auto-reply failed (but don't fail the request)
    if (!result.autoReply.success) {
      console.warn("Auto-reply email failed:", result.autoReply.error);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please contact support.",
      },
      { status: 500 }
    );
  }
}
