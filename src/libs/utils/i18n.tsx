// i18n.tsx
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../hooks-and-slice/language-slice';

import amTranslation from '../../locals/am/translation.json';
import enTranslation from '../../locals/en/translation.json';

const i18nOptions: InitOptions = {
  resources: {
    en: {
      translation: amTranslation,
    },
    fr: {
      translation: enTranslation,
    },
  },
  fallbackLng: 'en',
  detection: {
    order: ['localStorage', 'navigator'],
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nOptions);

// Define the 'i18n' property on 'SetLanguage'
function SetLanguage() {
  const dispatch = useDispatch();

  i18n.on('languageChanged', (lng) => {
    dispatch(setLanguage(lng));
  });
}

SetLanguage.i18n = i18n; // Explicitly define the 'i18n' property

export default SetLanguage;
