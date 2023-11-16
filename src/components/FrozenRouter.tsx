"use client";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRef, useContext } from "react";

export function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}
