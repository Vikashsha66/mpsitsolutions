import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Escape HTML for safety
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

Deno.serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("📩 Contact form request received");

    // Get API key
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("❌ Missing RESEND_API_KEY");

      return new Response(
        JSON.stringify({
          error: "RESEND_API_KEY is not configured",
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Read request body
    const body = (await req.json()) as Partial<ContactPayload>;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    // Validate fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          error: "All fields are required",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({
          error: "Invalid email address",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("📨 Sending email via Resend...");

    // Build email HTML
    const html = `
      <h2>New Contact Form Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">
        ${escapeHtml(message)}
      </p>
    `;

    // Send email
    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "MPS IT Solutions <onboarding@resend.dev>",
          to: ["mpsinghper@gmail.com"],
          reply_to: email,
          subject: `[Website Contact] ${subject}`,
          html: html,
        }),
      }
    );

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("❌ Resend API error:", data);

      return new Response(
        JSON.stringify({
          error: "Failed to send email",
          details: data,
        }),
        {
          status: 502,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("✅ Email sent successfully");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        id: data.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("🔥 Server error:", error);

    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});