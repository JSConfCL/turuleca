import { cookies } from "next/headers";
import { Theme, ThemeCookieKey } from "./types";

export const useGetCookieThemeValue = () => {
  const cookie = cookies().get(ThemeCookieKey);
  if (cookie) {
    return cookie?.value as (typeof Theme)[keyof typeof Theme];
  }
  return "dark";
};
