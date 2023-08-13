import Link from "next/link";
import { Button } from "../../../components/ui/button";

export default function Home() {
  return (
    <main className="flex max-w-5xl flex-col items-center justify-between px-6 pt-36 transition-all md:px-10 md:pt-44 xl:px-0 xl:pt-52">
      <div className="flex flex-col gap-16 pb-4">
        <h1 className="flex flex-col justify-start gap-7 text-left text-6xl font-extrabold shadow-slate-900 transition-all text-shadow sm:text-7xl xl:text-8xl">
          <span>Landing cool</span>
        </h1>
      </div>
      <div className="flex flex-col gap-6 text-center">
        <p>
          Texto explicando que hace la app. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Autem velit consequuntur molestias
          explicabo ratione, pariatur quae.
        </p>
        <p>
          [inserte grafico cool acá. interactivo. Campana de gauss. Que muestre
          sueldos en relacion al total]
        </p>
        <div>
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

export const runtime = "edge";
