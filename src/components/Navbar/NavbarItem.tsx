"use client";

import Link from "next/link";
import { NavbarMenuItem } from "./types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import classNames from "classnames";
import { Button } from "../ui/button";

export const NavbarItem = ({ item }: { item: NavbarMenuItem }) => {
  const { type } = item;
  if (type === "dropdown") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          {item.icon && (
            <Button variant="ghost" size={item.content ? "default" : "icon"}>
              {item.icon}
              {item.content && <span>{item.content}</span>}
            </Button>
          )}
          {!item.icon && item.content && (
            <Button variant="ghost">
              <span>{item.content}</span>
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {item.children.map((children) => {
            if (children.type === "link") {
              return (
                <DropdownMenuItem
                  key={`dropdown-${children.type}-${children.content} `}
                  className="cursor-pointer"
                >
                  <Link
                    href={children.link}
                    className="flex items-center gap-1"
                  >
                    {children.icon}
                    <span>{children.content}</span>
                  </Link>
                </DropdownMenuItem>
              );
            }

            if (children.type === "divider") {
              return <DropdownMenuSeparator key={`dropdown-${item.content}`} />;
            }
            return (
              <DropdownMenuItem
                key={`dropdown-${item.content}`}
                onClick={children.onClick}
                className={classNames(children.onClick && "cursor-pointer")}
              >
                {children.icon}
                <span>{children.content}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (type === "link") {
    return (
      <Link
        href={item.link}
        // className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {item.content}
      </Link>
    );
  }

  return (
    <Button
      variant={"link"}
      onClick={item.onClick}
      className={classNames("cursor-pointer")}
    >
      {item.content}
    </Button>
  );
};
