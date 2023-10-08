import React, { ComponentProps } from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";

export const InternalTextLink = ({
  underline,
  children,
  ...rest
}: ComponentProps<typeof Link> & {
  underline?: true | false | "hover";
}) => {
  return (
    <Link
      className={cn("font-medium text-primary transition-colors", {
        underline: underline === true,
        "hover:underline": underline === "hover",
      })}
      {...rest}
    >
      {children}
    </Link>
  );
};
