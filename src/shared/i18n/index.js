import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./translations/en.js";
import { ru } from "./translations/ru.js";
import { bg } from "./translations/bg.js";
import { getUserLanguage } from "@/shared/lib/helpers/getUserLanguage.js";

const lng = getUserLanguage();

const resources = {
    en: {
      translation: en
    },
    bg: {
      translation: bg
    },
    ru: {
      translation: ru
    }
  };
  

  i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "bg", "ru"],
    lng: lng.language,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;