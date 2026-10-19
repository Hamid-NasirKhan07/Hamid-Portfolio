import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  projectType: z.string().default("General Inquiry"),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  honeypot: z.string().max(0, "Bot detected"), // Hidden honeypot must be empty
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate payload with Zod
    const validated = contactSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validated.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, projectType, message } = validated.data;

    // 2. Exact Subject & Label format as requested:
    // "subject exactly same as Name and Project domain" + "label name as Portfolio Client"
    const subject = `[Portfolio Client] ${name} - ${projectType}`;
    const destinationEmail = process.env.CONTACT_EMAIL || "hamidksoftwaredeveloper@gmail.com";
    const senderEmail = process.env.RESEND_FROM || "Portfolio Client <onboarding@resend.dev>";
    const resendApiKey = process.env.RESEND_API_KEY;

    // 3. Plaintext fallback
    const textContent = `
[LABEL: Portfolio Client]
New Client Inquiry via Portfolio Contact Form

Client Name: ${name}
Client Email: ${email}
Project Domain: ${projectType}
Timestamp: ${new Date().toISOString()}

Message:
--------------------------------------------------
${message}
--------------------------------------------------

Reply directly to this email or write to: ${email}
`.trim();

    // 4. Modern Dark-themed HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #020409; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e8eaf6;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background: linear-gradient(145deg, #0d1326, #060c18); border: 1px solid rgba(108, 99, 255, 0.3); border-radius: 12px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
    <!-- Header -->
    <tr>
      <td style="padding: 28px 32px; background: rgba(108, 99, 255, 0.08); border-bottom: 1px solid rgba(108, 99, 255, 0.2);">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span style="display: inline-block; padding: 4px 10px; background: rgba(0, 212, 255, 0.15); border: 1px solid rgba(0, 212, 255, 0.4); border-radius: 100px; color: #00d4ff; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: bold;">
                🏷️ Label: Portfolio Client
              </span>
              <h1 style="margin: 12px 0 0 0; font-size: 22px; color: #ffffff; font-weight: 700; letter-spacing: -0.02em;">
                ${name}
              </h1>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #00d4ff; font-family: monospace;">
                Focus: ${projectType}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Information -->
    <tr>
      <td style="padding: 28px 32px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(108, 99, 255, 0.18); border-radius: 8px; padding: 16px;">
          <tr>
            <td style="padding: 6px 0; font-size: 12px; color: rgba(232, 234, 246, 0.6); font-family: monospace; text-transform: uppercase; width: 130px;">
              Client Name:
            </td>
            <td style="padding: 6px 0; font-size: 14px; color: #ffffff; font-weight: 600;">
              ${name}
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 12px; color: rgba(232, 234, 246, 0.6); font-family: monospace; text-transform: uppercase;">
              Client Email:
            </td>
            <td style="padding: 6px 0; font-size: 14px;">
              <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none; font-weight: 600;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 12px; color: rgba(232, 234, 246, 0.6); font-family: monospace; text-transform: uppercase;">
              Project Domain:
            </td>
            <td style="padding: 6px 0; font-size: 14px; color: #ff6b9d; font-weight: 600;">
              ${projectType}
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 12px; color: rgba(232, 234, 246, 0.6); font-family: monospace; text-transform: uppercase;">
              Received At:
            </td>
            <td style="padding: 6px 0; font-size: 12px; color: rgba(232, 234, 246, 0.8); font-family: monospace;">
              ${new Date().toUTCString()}
            </td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-bottom: 28px;">
          <h2 style="font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(232, 234, 246, 0.6); margin: 0 0 8px 0;">
            Project Scope & Goals:
          </h2>
          <div style="background: rgba(2, 4, 9, 0.6); border-left: 3px solid #6c63ff; padding: 16px 20px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.7; color: #e8eaf6; white-space: pre-wrap;">
${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
          </div>
        </div>

        <!-- Quick Reply CTA -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 10px;">
          <tr>
            <td align="center">
              <a href="mailto:${email}?subject=${encodeURIComponent("Re: " + subject)}" style="display: inline-block; background: linear-gradient(135deg, #6c63ff, #00d4ff); color: #ffffff; text-decoration: none; font-size: 13px; font-family: monospace; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 28px; border-radius: 6px; box-shadow: 0 8px 24px rgba(108, 99, 255, 0.45);">
                Reply Directly to ${name} &rarr;
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 16px 32px; background: rgba(0, 0, 0, 0.4); border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center; font-size: 11px; color: rgba(232, 234, 246, 0.4); font-family: monospace;">
        Delivered via Hamid Nasir Khan Portfolio · Tag: Portfolio Client
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // 5. Send via Resend API Key if configured
    if (resendApiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: senderEmail,
            to: [destinationEmail],
            reply_to: email, // Clicking "Reply" in Gmail replies straight to the client!
            subject: subject,
            text: textContent,
            html: htmlContent,
            tags: [
              { name: "category", value: "portfolio-client" },
              // Sanitize projectType for Resend tag compliance (ASCII letters, numbers, underscores, dashes only)
              { name: "domain", value: projectType.replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase().slice(0, 20) },
            ],
          }),
        });

        if (!res.ok) {
          const errorData = await res.text();
          console.error("[RESEND_ERROR]", errorData);
          // Still notify gracefully if external service hits limit
        } else {
          console.log("[RESEND_SUCCESS] Email sent with subject:", subject);
        }
      } catch (err) {
        console.error("[RESEND_FETCH_EXCEPTION]", err);
      }
    } else {
      // Local development or when waiting for API key
      console.log("[CONTACT_FORM_SUBMISSION_READY]", {
        timestamp: new Date().toISOString(),
        label: "Portfolio Client",
        subject,
        to: destinationEmail,
        replyTo: email,
        name,
        email,
        projectType,
        messageSnippet: message.slice(0, 60),
        note: "Add RESEND_API_KEY to your .env.local or Vercel dashboard to deliver directly to Gmail.",
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been dispatched to my inbox. I will review it and reply within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
