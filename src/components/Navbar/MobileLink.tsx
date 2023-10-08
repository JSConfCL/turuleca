"use client";
// import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import classNames from "classnames";

interface MobileLinkProps extends LinkProps<{}> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={classNames(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
