import { FaBars, FaTimes } from "react-icons/fa";
const MantineLogo = "./assets/logo.png";
import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
type MenuType = {
  name: string;
  path: string;
  clickable: boolean;
};
export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    const selectedLanguage = lng;
    i18n.changeLanguage(selectedLanguage);
  };

  const menus: MenuType[] = [
    { name: t("home"), path: "/", clickable: true },
    { name: t("about"), path: "/about", clickable: true },
    { name: t("menu"), path: "/menu", clickable: true },
    { name: t("reservations"), path: "/bookings", clickable: true },
    {
      name: t("confirmed_booking"),
      path: "/confirmedBooking",
      clickable: false,
    },
  ];
  const [isAmharic, setIsAmharic] = useState(true); // Initially set to Amharic

  const toggleLanguage = () => {
    setIsAmharic((prevState) => !prevState); 
    const selectedLanguage = isAmharic ? "en" : "am"; 
    changeLanguage(selectedLanguage); 
  };

  return (
    <nav className="bg-white dark:bg-primary-900 fixed sticky w-full mx-auto z-20 top-0 left-0 dark:border-primary-600">
      <div className="px-4 md:mx-36">
        <div className="flex justify-between items-center h-full">
          <div className=" ">
            {/* Logo on the left */}
            <Link to="/" className="flex items-center">
              <img
                src={MantineLogo}
                loading="lazy"
                className="h-12 mr-3"
                alt="little lemon Logo"
              />
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button className="md:hidden" onClick={toggleDrawer}>
            {drawerOpened ? (
              <FaTimes className="text-primary-700" />
            ) : (
              <FaBars className="text-primary-700" />
            )}
          </button>

          {/* Mobile Drawer */}
          {drawerOpened && (
            <div className="fixed inset-0 z-50 bg-white dark:bg-dark-6 overflow-y-auto">
              {/* Drawer Content */}
              <ul className="p-4 space-y-4">
                {menus.map((menuItem: MenuType) => (
                  <li key={menuItem.path}>
                    <Link
                      to={menuItem.path}
                      onClick={closeDrawer}
                      className={`block text-md  hover:text-primary  text-primary-900 ${
                        pathname === menuItem.path
                          ? "text-yellow-600 current-location"
                          : ""
                      } hover:text-primary-700`}
                    >
                      {menuItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Language Selector */}
              <div className="p-4 space-y-2">
              <button onClick={toggleLanguage} className="flex items-center">
                {isAmharic ? (
                  <>
                    <img
                      src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png"
                      alt="amharic"
                      className="w-5 h-5"
                    />
                    English
                    
                  </>
                ) : (
                  <>
                    <img
                      src="./icons8-ethiopia-48.png"
                      alt="english"
                      className="w-5 h-5"
                    />
                    አማርኛ
                  </>
                )}
              </button>
              </div>
            </div>
          )}

          <div className="hidden md:flex space-x-6 items-center">
            {/* Desktop menus */}
            <ul className="flex flex-wrap justify-between items-center p-4 md:p-0 mt-4 font-medium border border-primary-100 rounded-lg bg-primary-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-primary-800 md:dark:bg-primary-900 dark:border-primary-700">
              {/* Center-aligned menus */}
              <div className="flex justify-start space-x-4">
                {menus.map((menuItem: MenuType) => (
                  <li key={menuItem.path}>
                    <Link
                      to={menuItem.path}
                      className={`block py-8  hover:text-primary text-md radius-md p-4 text-center text-primary-900 rounded ${
                        pathname === menuItem.path ? "text-yellow-600 " : ""
                      }  hover-bg-primary-100 md:hover:bg-transparent md:hover-text-primary-700 md:p-0 md:dark:hover-text-primary-500 dark-text-white dark:hover-bg-primary-700 dark:hover-text-white md:dark:hover-bg-transparent dark-border-primary-700`}
                    >
                      {menuItem.name}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <div className="flex flex-row right-1">
              {/* Language Selector */}

              <button onClick={toggleLanguage} className="flex items-center">
                {isAmharic ? (
                  <>
                    <img
                      src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png"
                      alt="amharic"
                      className="w-5 h-5"
                    />
                    English
                    
                  </>
                ) : (
                  <>
                    <img
                      src="./icons8-ethiopia-48.png"
                      alt="english"
                      className="w-5 h-5"
                    />
                    አማርኛ
                  </>
                )}
              </button>
            </div>
            {/* Sign-in and Sign-up buttons on the right */}
            <Link
              className={`text-primary-700  hover:text-primary   
              font-medium rounded-lg text-md px-2 py-2 text-center md-mr-0 ${
                pathname === "signin" ? "text-yellow-600 " : ""
              }`}
              to={"signin"}
            >
              Sign In
            </Link>
            <Link
              className={`text-primary-700 border border-green-700 hover:text-white hover:bg-primary-900 font-medium
   rounded-md text-md px-4 py-1 text-center ${
     pathname === "signup" ? "text-yellow-600 " : ""
   }`}
              to={"signup"}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
