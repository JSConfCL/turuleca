import { Button } from "../../src/components/ui/button";
import { ArrowRight } from "lucide-react";
import { routes } from "../../src/lib/routes";
import Link from "next/link";
import { FAQS } from "../../src/components/Faqs";
import React from "react";
import { Hero } from "../../src/features/hero";

export default function Page() {
  return (
    <>
      <Hero />
      <main className="container flex-1 p-4">
        <div className="flex max-w-7xl flex-col gap-28 px-6 pt-32 md:px-10 md:pt-40 xl:px-0 xl:pt-48">
          <section>
            <div>
              <Button asChild size="hero">
                <Link href={routes.onboarding.root}>
                  Regístrate
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </section>

          <section className="mx-auto flex w-10/12 flex-row gap-8 text-center">
            <div className="flex w-1/2 flex-auto flex-col gap-6">
              <h2 className="text-4xl font-bold ">Que es XXXXX XXXXX?</h2>
              <p className="font-roboto text-lg">
                Es una iniciativa de la cómunidad de JavascriptChile. Nuestra
                misión es ayudar a otros profesionales a entender mejor su valor
                en el mercado, y negociar salarios de manera informada!
              </p>
            </div>
            <div className="flex w-1/2 flex-auto flex-col gap-6">
              <h2 className="text-4xl font-bold">Cómo Funciona?</h2>
              <p className="font-roboto text-lg ">
                Es bastante simple! Son solamente 3 pasos:
              </p>
              <ol className="ml-[1em] list-outside list-decimal text-justify font-roboto">
                <li className="">
                  <span className="font-bold">Regístrate</span>
                </li>
                <li className="">
                  <span className="font-bold">Comparte</span> tu información
                  laboral (Salario, seniority, etc)
                </li>
                <li className="">
                  <span className="font-bold">Listo</span> ahora puedes ver
                  información relacionada a tu campo, area, y seniority.
                </li>
              </ol>
            </div>
          </section>

          <section className="mx-auto w-1/2 text-center">
            <hr />
          </section>

          <section className="mx-auto flex w-1/2 flex-col gap-6 text-center">
            <h2 className="text-3xl font-bold">Cuanto Cuesta?</h2>
            <p className="font-roboto text-lg">
              Es 100% gratis. ❤️ (Y OpenSource).
            </p>
            <p className="text-lg">
              Si nos quieres ayudar, comparte el sitio con tus amistades, y
              colegas!
              <br />
            </p>
          </section>

          <section className="mx-auto w-1/2 text-center">
            <hr />
          </section>

          <section className="mx-auto flex w-full flex-col gap-6 md:w-8/12">
            <h2 className="text-center text-3xl font-bold">FAQ</h2>
            <React.Suspense fallback={null}>
              <FAQS />
            </React.Suspense>
          </section>
        </div>
      </main>
    </>
  );
}

export const runtime = "edge";
