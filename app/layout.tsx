import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { Clerk } from "../src/components/AuthLayout";
import { NavBar } from "../src/components/Navbar";

export const metadata = {
  title: "openSalary",
  description: "Descubre cuanto estan pagando en tu el area Tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Clerk>
      <html lang="es">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Koulen&display=swap"
            rel="stylesheet"
          />
        </head>

        <body className="dark flex h-[100dvh] w-[100dvw] flex-col overflow-hidden antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <div className="relative flex h-full flex-col overflow-auto">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </Clerk>
  );
}

export const runtime = "edge"; // <--  Specifying edge runtime.
