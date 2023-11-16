"use client";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "../../../src/components/ErrorBoundary";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, isSignedIn } = useAuth();
  const [redirectUrl, setRedirectUrl] = useState(
    typeof window !== "undefined" ? window.location.host : "",
  );
  const router = useRouter();
  useEffect(() => {
    setRedirectUrl(window.location.host);
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = `${process.env
        .NEXT_PUBLIC_SIGN_IN_URL!}?redirect_url=https://${redirectUrl}`;
    }
  }, [isLoaded, isSignedIn, redirectUrl, router]);

  return (
    <main className="mx-auto max-w-5xl p-4">
      <SignedIn>
        <Suspense>
          <ErrorBoundary
            onError={() => {
              router.push("/", {});
            }}
          >
            {children}
          </ErrorBoundary>
        </Suspense>
      </SignedIn>
      <SignedOut></SignedOut>
    </main>
  );
}
