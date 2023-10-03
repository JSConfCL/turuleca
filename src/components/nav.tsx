"use client";

import Link from "next/link";
import { MainNav } from "./Navbar/MainNav";
import { MobileNav } from "./Navbar/MobileNav";
import { ThemeSwitcher } from "./Navbar/ThemeSwitcher";
import { LogOut, User, PackageOpen } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { NavbarMenuItem } from "./Navbar/types";
import { Button } from "./ui/button";

export const Nav = ({ isLogged }: { isLogged: boolean }) => {
  const { signOut } = useClerk();

  const guestItems: Array<NavbarMenuItem> = [
    {
      content: "Login",
      type: "link",
      link: "/sign-in",
    },
  ];

  const userItems: Array<NavbarMenuItem> = [
    {
      // content: "Perfil",
      type: "dropdown",
      icon: <User className="mr-2 h-4 w-4" />,
      children: [
        {
          content: "Salir",
          type: "button",
          icon: <LogOut className="mr-2 h-4 w-4" />,
          onClick: () => signOut(),
        },
      ],
    },
  ];

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <Button variant={"link"} asChild>
          <Link href="/">
            <PackageOpen className="h-5 w-5" />
          </Link>
          {/* <div className="px-0"> */}
          {/* </div> */}
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="items-center space-x-4 hidden md:flex ">
            <ThemeSwitcher />
            <MainNav items={isLogged ? userItems : guestItems} />
          </nav>
        </div>
        <MobileNav items={isLogged ? userItems : guestItems} />
      </div>
    </header>
  );
};
