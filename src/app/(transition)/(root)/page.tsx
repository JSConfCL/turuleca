import { Button } from "../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Roles } from "./roles";

export default function Home() {
  return (
    <main className="flex justify-center pb-60">
      <div className="flex max-w-7xl flex-col gap-28 px-6 pt-32 md:px-10 md:pt-40 xl:px-0 xl:pt-48">
        <section className="flex flex-col gap-10 text-center">
          <div className="flex flex-col gap-4">
            <h1
              aria-roledescription="h1"
              className="z-20 translate-x-0 text-center text-4xl font-bold  leading-snug transition-all md:text-5xl xl:text-6xl"
            >
              <span>Descubre lo que </span>
              <span className="select-none whitespace-nowrap bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold  tracking-tight text-transparent dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500">
                realmente
              </span>{" "}
              <span>gana un</span>
            </h1>
            <Roles />
          </div>
          <p className="max-w-5xl self-center px-6 font-roboto text-xl md:text-2xl">
            Comparte tu salario de forma segura, y descubre cómo se compara con
            otros en tu campo y seniority!
          </p>
          <div>
            <img
              src="image-placeholder.jpg"
              alt="Big Image Placeholder"
              className="mx-auto h-64 bg-slate-200/50"
            />
          </div>
          <div>
            <Button size="lg" className="px-10 py-8 text-xl">
              Regístrate
              <ArrowRight />
            </Button>
          </div>
        </section>

        <section className="mx-auto w-1/2 text-center">
          <h2 className="mb-4 text-3xl font-bold">Que es XXXXXXXXXX?</h2>
          <p className="mb-4 font-roboto text-lg">
            Somos un grupo de desarrolladores y gente del area tech. Nuestra
            misión es ayudar a otros profesionales a entender mejor su valor en
            el mercado, y negociar salarios de manera informada!
          </p>
        </section>

        <section className="mx-auto w-1/2 text-center">
          <h2 className="mb-4 text-3xl font-bold">Precio</h2>
          <p className="mb-4 font-roboto text-lg">
            Nope, no hay precio, es 100% gratis. ❤️ (Y OpenSource).
          </p>
          <p className="mb-4 text-lg italic">
            Pero si nos quieres ayudar, contáctate con nosotros{" "}
            <a href="mailto:contacto@jschile.org" className="text-blue-500">
              contacto@jschile.org
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export const runtime = "edge";
