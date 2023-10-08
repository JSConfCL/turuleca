import Link from "next/link";
import { importantLinks, routes } from "../lib/routes";
import { Button } from "../components/ui/button";
import { ExternalTextLink } from "../components/TextLink";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center pt-12">
      <div className="flex max-w-3xl flex-col items-center gap-6 px-8 text-center">
        <h2 className="text-6xl">Un momento!</h2>
        <p className="text-2xl">
          No pudimos encontrar la página que estás buscando. 😭
        </p>
        <p className="text-base">
          Estas seguro que la dirección es correcta? Si crees que esto es un
          bug, puedes déjarnos un mensaje en el{" "}
          <ExternalTextLink href={importantLinks.discord} underline="hover">
            Discord
          </ExternalTextLink>
          , o déjanos un issue en el{" "}
          <ExternalTextLink href={importantLinks.repo} underline="hover">
            repositorio de Github
          </ExternalTextLink>
        </p>
        <Button asChild>
          <Link href={routes.home}>Volver al Home</Link>
        </Button>
      </div>
    </div>
  );
}
