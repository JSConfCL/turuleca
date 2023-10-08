"use client";
import React from "react";

import { ClerkProvider } from "@clerk/clerk-react";
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!clerkPubKey) {
  throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY");
}

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider publishableKey={clerkPubKey}>{children}</ClerkProvider>;
};
