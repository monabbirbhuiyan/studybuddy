import SignUpForm from "@/components/auth/sign-up-form";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Sign Up - StudyBuddy",
  description:
    "Create an account to start using StudyBuddy, your AI-powered study assistant for STEM and Business students.",
};

const SignUp = (props: Props) => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
