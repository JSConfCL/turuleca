import React from "react";
import { LayoutTransition } from "./ClientLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutTransition>{children}</LayoutTransition>;
}
