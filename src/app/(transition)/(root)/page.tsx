import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Roles } from "./roles";

export default function Home() {
  return (
    <main className="flex justify-center pb-60">
      <div className="flex max-w-7xl gap-28 flex-col px-6 pt-32 md:px-10 md:pt-40 xl:px-0 xl:pt-48">
        <section className="text-center flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1
              aria-roledescription="h1"
              className="transition-all text-4xl md:text-5xl xl:text-6xl font-bold  leading-snug text-center z-20 translate-x-0"
            >
              <span>Descubre lo que </span>
              <span className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500  from-indigo-500 via-purple-500 to-pink-500 whitespace-nowrap select-none">
                realmente
              </span>{" "}
              <span>gana un</span>
            </h1>
            <Roles />
          </div>
          <p className="text-xl md:text-2xl max-w-5xl px-6 self-center font-roboto">
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
            <Button size="lg" className="text-xl px-10 py-8">
              Regístrate
              <ArrowRight />
            </Button>
          </div>
        </section>

        <section className="w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Que es XXXXXXXXXX?</h2>
          <p className="text-lg mb-4 font-roboto">
            Somos un grupo de desarrolladores y gente del area tech. Nuestra
            misión es ayudar a otros profesionales a entender mejor su valor en
            el mercado, y negociar salarios de manera informada!
          </p>
        </section>

        <section className="w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Precio</h2>
          <p className="text-lg mb-4 font-roboto">
            Nope, no hay precio, es 100% gratis. ❤️ (Y OpenSource).
          </p>
          <p className="text-lg mb-4 italic">
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
