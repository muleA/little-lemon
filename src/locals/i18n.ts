import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEn from "./en/header.json";
import headerAm from "./am/header.json"; // Import language file for French

/* import headerEn from "./en/header.json"; // Import language file for English
import HomeEn from "./en/home.json";
import AboutEn from "./en/about.json";
import CommonEn from "./en/common.json";
import FooterEn from "./en/footer.json";
import MenuEn from "./en/menu.json";
import BookingEn from "./en/booking.json";
import headerAm from "./am/header.json"; // Import language file for French
import HomeAm from "./am/home.json";
import AboutAm from "./am/about.json";
import CommonAm from "./am/common.json";
import FooterAm from "./am/footer.json";
import MenuAm from "./am/menu.json";
import BookingAm from "./am/booking.json"; */

// Set up i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: headerEn,
      /*  Home: HomeEn,
        About: AboutEn,
        Common: CommonEn,
        Footer: FooterEn,
        Menu: MenuEn,
        Booking: BookingEn, */
    },
    am: {
      translation: headerAm,
      /*    Home: HomeAm,
        About: AboutAm,
        Common: CommonAm,
        Footer: FooterAm,
        Menu: MenuAm,
        Booking: BookingAm, */
    },
  },
  lng: "en", // Set the default language
  fallbackLng: "en", // Set the fallback language if a translation is missing
  interpolation: {
    escapeValue: false, // React handles escaping
  },
});

export default i18n;
