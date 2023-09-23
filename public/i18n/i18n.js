/* eslint-disable no-undef */
import i18n from 'i18next';
import {
  initReactI18next
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`./translations/${language}/${language}.json`)
        .then((resources) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .init({
    defaultNS: 'common',
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    translationStats: {
      //   // optional options, if not provided it will guess based on your i18next config
      queryStringParam: 'showtranslations',
      sourceLng: 'en',
      targetLngs: ['en', 'am'],
      preserveEmptyStrings: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;