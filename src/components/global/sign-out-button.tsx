"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

const SignOutButton = () => {
  const router = useRouter();

  async function handleSignOut() {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error("Error signing out: " + error.message);
    } else {
      toast.success("Signed out successfully");
      router.push("/sign-in");
    }
  }
  return (
    <div>
      <Button onClick={handleSignOut} variant="destructive">
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutButton;
