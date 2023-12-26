"use client";
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "../../../src/components/ErrorBoundary";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [redirectUrl, setRedirectUrl] = useState(
    typeof window !== "undefined" ? window.location.host : "",
  );
  useEffect(() => {
    setRedirectUrl(window.location.toString());
  }, []);

  return (
    <main className="container flex flex-1 justify-center p-4 pt-32">
      <SignedIn>
        <Suspense>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Suspense>
      </SignedIn>
      <SignedOut>
        <SignIn redirectUrl={redirectUrl} />
      </SignedOut>
    </main>
  );
}
