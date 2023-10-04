"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { LayoutTransition } from "./ClientLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { getToken } = useAuth();

  useEffect(() => {
    const start = async () => {
      const token = await getToken({
        template: "API_AUTH",
      });
      console.log({ token });
    };
    start().catch((e) => {
      console.error(e);
    });
  }, []);

  return (
    <div className="h-full overflow-hidden">
      <LayoutTransition>{children}</LayoutTransition>
    </div>
  );
}

export const runtime = "edge";
