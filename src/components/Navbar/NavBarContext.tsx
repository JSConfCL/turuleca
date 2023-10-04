import { Nav } from "@/components/nav";
import { currentUser } from "@clerk/nextjs";

export const NavComponent = async () => {
  const user = await currentUser();
  return <Nav isLogged={user !== null} />;
};
