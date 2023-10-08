import React from "react";
import { LayoutTransition } from "./LayoutTransition";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutTransition>{children}</LayoutTransition>;
}
