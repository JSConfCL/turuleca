import React from "react";
import img4 from "./hero.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cx } from "class-variance-authority";
import { Roles } from "../../components/roles";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { routes } from "../../lib/routes";

const ImageBackground = ({ img }: { img: StaticImport }) => (
  <picture
    className={cx(
      "absolute flex h-full w-full text-clip blur-[1px] pointer-events-none",
      "bg-gradient-to-bl from-teal-300 to-purple-500 opacity-60",
    )}
  >
    <Image
      src={img}
      className="h-full w-full object-cover mix-blend-overlay"
      alt="stylized background with a computer"
    />
  </picture>
);

const Text = () => (
  <div className="container flex flex-col gap-8 md:gap-20">
    <div className="grid grid-cols-12 gap-8">
      <h1 className="col-span-12 flex flex-col gap-3 text-2xl font-bold text-white sm:col-span-5 sm:text-3xl md:col-span-8 md:gap-6 md:text-6xl">
        <div className="w-fit bg-black/70 p-2 md:p-3 xl:p-4">
          Descubre cuanto gana un
        </div>
        <Roles />
      </h1>
    </div>
    <div className="grid grid-cols-7 gap-8">
      <p className="col-span-7 text-lg font-semibold sm:col-span-7 sm:text-2xl md:col-span-7 md:text-3xl">
        Comparte tu salario de forma segura, anónima, y compara con otros en tu
        campo, area, y seniority.
      </p>
      <div>
        <Button asChild size="hero">
          <Link href={routes.onboarding.root}>
            Regístrate
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative h-[90svh] w-full">
      <ImageBackground img={img4} />
      <div className="flex h-full translate-x-0 flex-col justify-center">
        <Text />
      </div>
    </section>
  );
};
