import { NextRequest, NextResponse } from "next/server";
import { verifySmtpConnection } from "@/lib/email/service";

/**
 * SMTP Test Endpoint
 * 
 * Protected endpoint to verify SMTP configuration in production
 * Usage: GET /api/admin/test-smtp with X-Admin-Secret header
 * 
 * Set ADMIN_SECRET in your environment variables (Netlify)
 */
export async function GET(request: NextRequest) {
  // Security: Check admin secret
  const adminSecret = request.headers.get("x-admin-secret");
  const expectedSecret = process.env.ADMIN_SECRET;

  if (!expectedSecret) {
    return NextResponse.json(
      {
        success: false,
        message: "Admin endpoint not configured (ADMIN_SECRET missing)",
      },
      { status: 503 }
    );
  }

  if (adminSecret !== expectedSecret) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  // Verify SMTP connection
  try {
    const isConnected = await verifySmtpConnection();

    if (isConnected) {
      return NextResponse.json({
        success: true,
        message: "SMTP connection verified successfully",
        config: {
          host: process.env.SMTP_HOST || "Not set",
          port: process.env.SMTP_PORT || "Not set",
          secure: process.env.SMTP_SECURE === "true",
          user: process.env.SMTP_USER || "Not set",
          fromEmail: process.env.SMTP_FROM_EMAIL || "Not set",
          companyEmail: process.env.COMPANY_EMAIL || "Not set",
          adminEmail: process.env.ADMIN_EMAIL || "Not set (optional)",
        },
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "SMTP connection failed - check your credentials and configuration",
          config: {
            host: process.env.SMTP_HOST || "Not set",
            port: process.env.SMTP_PORT || "Not set",
            user: process.env.SMTP_USER || "Not set",
          },
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("SMTP test error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "SMTP test failed with error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
