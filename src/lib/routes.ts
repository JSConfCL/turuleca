export const routes = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  onboarding: {
    root: "/onboarding",
    yourInfo: "/onboarding/your-info",
    workInfo: "/onboarding/work-info",
    final: "/onboarding/final",
  },
  analytics: "/analytics",
} as const;

export const importantLinks = {
  contactMail: "contacto@jschile.org",
  discord: "https://discord.jschile.org/",
  repo: "https://github.com/JSConfCL/turuleca",
};
