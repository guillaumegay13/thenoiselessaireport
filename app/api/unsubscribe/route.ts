import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const email: string | undefined = body.email;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  await fetch(
    `https://send-again.com/api/contacts/${encodeURIComponent(email)}?workspace=noiselessreport.ai`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.SEND_AGAIN_API_KEY}`,
      },
    }
  );

  // Always return success to avoid leaking subscription status
  return NextResponse.json({ success: true });
}
