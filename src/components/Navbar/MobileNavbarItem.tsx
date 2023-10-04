"use client";

import { NavbarMenuItem, NavbarMenuItemChildren } from "./types";
import { MobileLink } from "./MobileLink";

const mobileItemMapper = (
  item: NavbarMenuItemChildren,
  setOpen: (open: boolean) => void,
) => {
  if (item.type === "link") {
    return (
      <MobileLink
        key={`mobileitem-${item.link}`}
        href={item.link}
        onOpenChange={setOpen}
        className="text-muted-foreground"
      >
        {item.content}
      </MobileLink>
    );
  }

  if (item.type === "button") {
    return (
      <span
        className="cursor-pointer text-muted-foreground"
        onClick={item.onClick}
      >
        {item.content}
      </span>
    );
  }

  if (item.type === "divider") {
    return <hr className="border-gray-200" />;
  }
  // return <h4 className="font-medium text-muted-foreground">{item.content}</h4>;
};
export const MobileNavbarItem = ({
  item,
  setOpen,
}: {
  item: NavbarMenuItem;
  setOpen: (open: boolean) => void;
}) => {
  if (item.type === "dropdown") {
    return (
      <>
        <h4 className="font-medium text-muted-foreground">{item.content}</h4>
        {item.children.map((e) => mobileItemMapper(e, setOpen))}
      </>
    );
  }
  if (item.type === "link") {
    return (
      <MobileLink
        key={`mobileitem-${item.link}`}
        href={item.link}
        onOpenChange={setOpen}
        className="text-muted-foreground"
      >
        {item.content}
      </MobileLink>
    );
  }

  if (item.type === "button") {
    return (
      <span
        className="cursor-pointer text-muted-foreground"
        onClick={item.onClick}
      >
        {item.content}
      </span>
    );
  }

  return mobileItemMapper(item, setOpen);
};
