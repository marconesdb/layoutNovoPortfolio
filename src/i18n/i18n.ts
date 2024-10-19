import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';
import translationPT from '../locales/pt/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      pt: {
        translation: translationPT,
      },
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz a sanitização
    },
  });

export default i18n;
