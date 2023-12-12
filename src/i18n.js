// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from "./locales/en/translation.json"; // Örnek: İngilizce çeviriler
import trTranslation from './locales/tr/translation.json'; // Örnek: Türkçe çeviriler


const resources = {
  en: {
    translation: enTranslation,
  },
  tr: {
    translation: trTranslation,
  },
};


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
