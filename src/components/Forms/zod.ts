import { init } from "i18next";
import * as zod from "zod";
export * as z from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/es/zod.json";

// lng and resources key depend on your locale.
init({
  lng: "es",
  resources: {
    es: { zod: translation },
  },
}).catch((err) => console.error(err));
zod.setErrorMap(zodI18nMap);
