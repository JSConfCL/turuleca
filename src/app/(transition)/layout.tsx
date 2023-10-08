import React from "react";
import { LayoutTransition } from "../../components/LayoutTransition";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutTransition>{children}</LayoutTransition>;
}
