"use client";
import React from "react";
import { LoadingButton } from "../global/loading-button";
import { authClient } from "@/lib/auth-client";

type Props = {
  email: string;
  url: string;
};

const ResendVerificationButton = ({ email, url }: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function resendVerificationEmail() {
    setSuccess(null);
    setError(null);
    setIsLoading(true);

    const { error } = await authClient.sendVerificationEmail({
      email,
      callbackURL: url,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message || "Something went wrong");
    } else {
      setSuccess("Verification email sent successfully");
    }
  }

  return (
    <div className="space-y-4">
      {success && (
        <div role="status" className="text-sm text-green-600">
          {success}
        </div>
      )}
      {error && (
        <div role="alert" className="text-sm text-red-500">
          {error}
        </div>
      )}
      <LoadingButton
        onClick={resendVerificationEmail}
        className="w-full"
        loading={isLoading}
      >
        Resend verification email
      </LoadingButton>
    </div>
  );
};

export default ResendVerificationButton;
