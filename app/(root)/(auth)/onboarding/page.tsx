import { Roles } from "../../../../src/components/roles";
import React from "react";

export default function Page() {
  return (
    <main className="flex justify-center pb-60">
      <div className="flex max-w-7xl flex-col gap-28 px-6 pt-32 md:px-10 md:pt-40 xl:px-0 xl:pt-48">
        <section className="flex flex-col gap-10 text-center">
          <div className="flex flex-col gap-4">
            <h1
              aria-roledescription="h1"
              className="z-20 translate-x-0 text-center text-4xl font-bold  leading-snug transition-all md:text-5xl xl:text-6xl"
            >
              <span>Descubre cuanto </span>
            </h1>
            <Roles />
          </div>
        </section>
      </div>
    </main>
  );
}
