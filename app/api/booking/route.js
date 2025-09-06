export async function POST(request) {
  try {
    const body = await request.json();
    // Here you'd forward to your CRM/email. For now we just echo a success.
    // Example integration options: Formspree, Resend, SendGrid, Airtable, Google Sheets, Zapier.
    console.log("New booking request:", body);
    return Response.json({ ok: true, message: "Request received. We’ll contact you shortly." });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }
}
