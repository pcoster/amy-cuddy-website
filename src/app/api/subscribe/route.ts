import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: process.env.KIT_PUBLIC_API_KEY,
          email: email.trim(),
          first_name: firstName?.trim() ?? "",
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { message: data?.message ?? "Subscription failed. Please try again." },
      { status: res.status }
    );
  } catch {
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
