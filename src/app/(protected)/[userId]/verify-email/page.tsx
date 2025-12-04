import { getServerSession } from "@/actions/get-session";
import ResendVerificationButton from "@/components/settings/resend-verification-button";
import { Metadata } from "next";
import { redirect, unauthorized } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to activate your account.",
};
const VerifyEmailPage = async () => {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) unauthorized();

  if (user.emailVerified) redirect(`/${user.id}/dashboard`);

  return (
    <main className="flex flex-1 items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Verify your email</h1>
          <p className="text-muted-foreground">
            A verification email was sent to your inbox
          </p>
        </div>
        <ResendVerificationButton
          email={user.email}
          url={`/${user.id}/email-verified`}
        />
      </div>
    </main>
  );
};

export default VerifyEmailPage;
