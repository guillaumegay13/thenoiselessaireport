import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const email: string | undefined = body.email;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const res = await fetch("https://send-again.com/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SEND_AGAIN_API_KEY}`,
    },
    body: JSON.stringify({
      workspace: "noiselessreport.ai",
      contacts: [{ email }],
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
