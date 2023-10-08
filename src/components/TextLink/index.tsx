import React, { ComponentProps, DetailedHTMLProps } from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";

interface Props
  extends DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  underline?: true | false | "hover";
}

export const ExternalTextLink = ({ underline, children, ...rest }: Props) => {
  return (
    <a
      className={cn("font-medium text-primary transition-colors", {
        underline: underline === true,
        "hover:underline": underline === "hover",
      })}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
};

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
