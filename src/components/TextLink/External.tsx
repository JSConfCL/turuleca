import React, { DetailedHTMLProps } from "react";
import { cn } from "../../lib/utils";

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
