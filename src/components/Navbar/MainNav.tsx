import { NavBarProps } from "./types";
import { NavbarItem } from "./NavbarItem";

export function MainNav({ items }: NavBarProps) {
  return (
    <nav className={"flex items-center justify-end gap-4"}>
      {items.map((item, index) => (
        <NavbarItem key={`navbarItem-${index}`} item={item} />
      ))}
    </nav>
  );
}
