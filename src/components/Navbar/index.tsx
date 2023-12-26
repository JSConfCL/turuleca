"use client";

import Link from "next/link";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { LogOut, LogIn, PackageOpen } from "lucide-react";
import {
  SignInButton,
  useAuth,
  useClerk,
  useSession,
} from "@clerk/clerk-react";
import { NavbarMenuItem } from "./types";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { routes } from "../../lib/routes";
import Image from "next/image";

export const NavBar = () => {
  const { userId } = useAuth();
  const { signOut } = useClerk();
  const { getToken } = useAuth();
  const { session } = useSession();
  const [redirectUrl, setRedirectUrl] = useState(
    typeof window !== "undefined" ? window.location.host : "",
  );
  useEffect(() => {
    setRedirectUrl(window.location.host);
  }, []);
  useEffect(() => {
    const start = async () => {
      const token = await getToken({
        template: "API_AUTH",
      });
      console.log({ token });
    };
    start().catch((e) => {
      console.error(e);
    });
  }, [getToken]);

  const guestItems: Array<NavbarMenuItem> = [
    process.env.NEXT_PUBLIC_SIGN_IN_URL
      ? {
          icon: <LogIn className="h-5 w-5" />,
          type: "button",
          link: `${process.env
            .NEXT_PUBLIC_SIGN_IN_URL!}?redirect_url=https://${redirectUrl}`,
        }
      : {
          type: "button",
          content: (
            <SignInButton mode="modal">
              <LogIn className="h-5 w-5" />
            </SignInButton>
          ),
          onClick: () => {},
        },
  ];

  const userItems: Array<NavbarMenuItem> = [
    {
      type: "dropdown",
      icon: (
        <Image
          src={session?.publicUserData.imageUrl || ""}
          width={24}
          height={24}
          className="h-6 w-6 rounded-full"
          alt="User Avatar"
        />
      ),
      children: [
        {
          content: "Salir",
          type: "button",
          icon: <LogOut className="h-4 w-4" />,
          onClick: () => {
            signOut().catch((e) => {
              console.error(e);
            });
          },
        },
      ],
    },
  ];

  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <Button variant={"link"} asChild>
          <Link href={routes.home}>
            <PackageOpen className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="hidden items-center justify-center space-x-4 md:flex ">
            <MainNav items={userId ? userItems : guestItems} />
          </nav>
        </div>
        <MobileNav items={userId ? userItems : guestItems} />
      </div>
    </header>
  );
};
