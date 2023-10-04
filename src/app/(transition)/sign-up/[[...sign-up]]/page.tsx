import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 pt-10 transition-all md:px-10 md:pt-44 xl:px-0 xl:pt-52">
      <div className="flex max-w-5xl">
        <SignUp />
      </div>
    </main>
  );
}
