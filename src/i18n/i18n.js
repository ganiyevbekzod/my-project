import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUz from '../translate/Uztraslate.json';
import translationRu from '../translate/Rutranslate.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: translationUz },
      ru: { translation: translationRu },
    },
    lng: 'uz', // default language
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;