/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
const useTranslate = ():any => {
  const { i18n } = useTranslation();
  const translate = (key: string):string => {
    const currentLanguage = i18n.language;
    if (currentLanguage && i18n?.options?.resources?.[currentLanguage]) {
      const translations: any = i18n.options.resources[currentLanguage];
      if (key in translations) {
        return translations[key];
      }
    }
    return key;
  };

  return translate;
};

export default useTranslate;
