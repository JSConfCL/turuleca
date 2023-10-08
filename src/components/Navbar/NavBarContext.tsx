"use client";
import { Nav } from "@/components/nav";
import { useAuth } from "@clerk/nextjs";

export const NavComponent = () => {
  const { isLoaded, userId } = useAuth();
  return <Nav isLogged={Boolean(userId)} isLoaded={isLoaded} />;
};
