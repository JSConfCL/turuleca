"use client";
import React, {
  useCallback,
  useMemo,
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import cookieLibrary from "js-cookie";
import { Theme, ThemeCookieKey } from "./types";

const ThemeContext = createContext<{
  theme: (typeof Theme)[keyof typeof Theme];
  toggleTheme: () => void;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}>({
  theme: Theme.light,
  toggleTheme: () => {},
  setDarkTheme: () => {},
  setLightTheme: () => {},
});

export const PersistentThemeProvider = ({
  children,
  initialTheme = Theme.dark,
}: {
  children: ReactNode;
  initialTheme?: (typeof Theme)[keyof typeof Theme];
}) => {
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
    setTheme(newTheme);
    cookieLibrary.set(ThemeCookieKey, newTheme);
  }, [theme]);

  const setDarkTheme = useCallback(() => {
    setTheme(Theme.dark);
    cookieLibrary.set(ThemeCookieKey, Theme.dark);
  }, []);

  const setLightTheme = useCallback(() => {
    setTheme(Theme.light);
    cookieLibrary.set(ThemeCookieKey, Theme.light);
  }, []);

  useEffect(() => {
    const localTheme = cookieLibrary.get(ThemeCookieKey) as
      | (typeof Theme)[keyof typeof Theme]
      | undefined;
    localTheme && setTheme(localTheme);
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, setDarkTheme, setLightTheme }),
    [setDarkTheme, setLightTheme, theme, toggleTheme],
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeHTMLNode = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <html className={theme} style={{ colorScheme: "dark" }}>
      {children}
    </html>
  );
};
