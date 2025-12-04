import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name, university } = body;

    // Create user with Better Auth
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    // Update user with university field
    if (university && result.user) {
      await prisma.user.update({
        where: { id: result.user.id },
        data: { university },
      });
    }

    return NextResponse.json({ success: true, user: result.user });
  } catch (error: any) {
    console.error("Sign up error:", error);
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
