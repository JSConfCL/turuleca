type LinkItem = {
  type: "link";
  link: string;
  content?: React.ReactNode;
  newTab?: boolean;
  icon?: React.ReactNode;
};
type ButtonItem =
  | {
      type: "button";
      content?: React.ReactNode;
      onClick: (e: React.MouseEvent<HTMLElement>) => void;
      link?: never;
      icon?: React.ReactNode;
    }
  | {
      type: "button";
      content?: React.ReactNode;
      onClick?: never;
      link: string;
      icon?: React.ReactNode;
    };

type DropdownItem =
  | {
      type: "dropdown";
      content: string;
      icon: React.ReactNode;
      children: Array<NavbarMenuItemChildren>;
    }
  | {
      type: "dropdown";
      content: string;
      icon?: never;
      children: Array<NavbarMenuItemChildren>;
    }
  | {
      type: "dropdown";
      content?: never;
      icon: React.ReactNode;
      children: Array<NavbarMenuItemChildren>;
    };

type DividerItem = {
  type: "divider";
};

export type NavbarMenuItemChildren = LinkItem | ButtonItem | DividerItem;

export type NavbarMenuItem = DropdownItem | LinkItem | ButtonItem;

export type NavBarProps = {
  items: Array<NavbarMenuItem>;
};
