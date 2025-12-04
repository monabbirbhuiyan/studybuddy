import { getServerSession } from "@/actions/get-session";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const session = await getServerSession();
  const user = session?.user;

  if (user) redirect(`/${user.id}/dashboard`);

  return <div>{children}</div>;
};

export default AuthLayout;
