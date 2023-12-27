import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { Clerk } from "../src/components/AuthLayout";
import { NavBar } from "../src/components/Navbar";
import {
  PersistentThemeProvider,
  ThemeHTMLNode,
} from "../src/components/PersistentTheme/persistentTheme";
import { useGetCookieThemeValue } from "../src/components/PersistentTheme/useGetCookieTheme";
import { ApolloWrapper } from "../src/api/ApolloWrapper";

export const metadata = {
  title: "openSalary",
  description: "Descubre cuanto paga tu rol en el mercado laboral",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useGetCookieThemeValue();

  return (
    <PersistentThemeProvider initialTheme={theme}>
      <Clerk>
        <ApolloWrapper>
          <ThemeHTMLNode>
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
                <div className="flex h-full flex-col">{children}</div>
              </ThemeProvider>
            </body>
          </ThemeHTMLNode>
        </ApolloWrapper>
      </Clerk>
    </PersistentThemeProvider>
  );
}

export const runtime = "edge"; // <--  Specifying edge runtime.
