/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Typed from "react-typed";
import { ToggleTheme } from "../../libs/ui/theme-toggler";
import { T } from "@libs/translation/T";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { lazy, useState } from "react";
const LanguageSelector = lazy(() => import("@libs/translation/language-selector"));

type MenuType = {
  name: string;
  path: string;
};

export function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  const { pathname } = useLocation();

  const menus: MenuType[] = [
    { name: T("Home"), path: "/" },
    { name: T("about"), path: "/about" },
    { name: T("menu"), path: "/menu" },
    { name: T("reservations"), path: "/bookings" },
    {
      name: T("confirmed_booking"),
      path: "/confirmedBooking",
    },
  ];

  return (
    <>
      <header>
        <div className="flex h-10 w-full items-center justify-between bg-primary pl-10 text-sky-100">
          <div className="container flex w-full justify-start self-center">
            <div className="flex w-3/2 cursor-pointer items-center justify-center rounded-full bg-white p-1 text-primary-900">
              <h1 className="text-md mx-2">
                <Typed
                  strings={[
                    T("advert-message")
                  ]}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                />
              </h1>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white fixed sticky w-full mx-auto z-20 top-0 left-0 dark:border-primary-600">
        <div className="px-4 md:mx-36">
        <div className="flex justify-between items-center h-full">
  <div>
              <Link to="/" className="flex items-center">
                <img
                  src={"./assets/logo.png"}
                  loading="lazy"
                  className="h-12 w-auto mr-3"
                  alt="Little Lemon Logo"
                />
              </Link>
            </div>
            <button
              onClick={openDialog}
              className="block sm:hidden md:hidden text-primary-900"
              aria-label="Open Menu"
              id="open menu"
            >
              <FaBars />
            </button>

            <Drawer anchor="left" open={dialogOpen} onClose={closeDialog}>
              <List component="ul">
                {menus.map((menuItem: MenuType) => (
                  <ListItem
                    key={menuItem.path}
                    component={"li"  as any}
                    to={menuItem.path}
                    onClick={closeDialog}
                    className={`${
                      pathname === menuItem.path
                        ? "bg-yellow-600 current-location"
                        : ""
                    }`}
                    aria-current={pathname === menuItem.path ? "page" : undefined}
                  >
                    <ListItemText primary={menuItem.name} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <div className="hidden md:flex space-x-6 items-center">
              <ul className="flex flex-wrap justify-between items-center p-4 md:p-0 mt-4 font-medium border border-primary-100 rounded-lg bg-primary-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-primary-800 md:dark:bg-primary-900 dark:border-primary-700">
                <div className="flex justify-start space-x-4">
                  {menus.map((menuItem: MenuType) => (
                    <li key={menuItem.path}>
                      <Link
                        to={menuItem.path}
                        className={`block py-8 hover:text-primary text-md radius-md p-4 text-center text-primary-900 rounded ${
                          pathname === menuItem.path ? "text-yellow-500 " : ""
                        } hover-bg-primary-100 md:hover:bg-transparent md:hover-text-primary-700 md:p-0 md:dark:hover-text-primary-500 dark-text-white dark:hover-bg-primary-700 dark:hover-text-white md:dark:hover-bg-transparent dark-border-primary-700`}
                      >
                        {menuItem.name}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>

            <div className="hidden md:flex space-x-4 items-center">
              <ToggleTheme />

              <div className="flex flex-row right-1">
                <LanguageSelector />
              </div>
              <Link
                className={`text-primary-700  hover:text-primary   
              font-medium rounded-lg text-md px-2 py-2 text-center md-mr-0 ${
                pathname === "/sign-in" ? "text-yellow-600 " : ""
              }`}
                to={"/sign-in"}
                aria-current={pathname === "/sign-in" ? "page" : undefined}
              >
                {T("Sign-In")}
              </Link>
              <Link
                className={`text-primary-700 border border-green-700 hover:text-white hover:bg-primary-900 font-medium
   rounded-md text-md px-4 py-1 text-center ${
     pathname === "sign-up" ? "text-yellow-600 " : ""
   }`}
                to={"/sign-up"}
                aria-current={pathname === "sign-up" ? "page" : undefined}
              >
                {T("sign-up")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
