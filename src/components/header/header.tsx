import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Typed from "react-typed";
import { ToggleTheme } from "../../libs/ui/theme-toggler";
import { T } from "@libs/translation/T";
import LanguageSelector from "@libs/translation/language-selector";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

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
      <div className="flex h-10 w-full items-center justify-between bg-primary pl-10 text-sky-100">
        <div className="container flex w-full justify-start self-center">
          <div className="flex w-3/2 cursor-pointer items-center justify-center rounded-full bg-primary-50/30 p-1 text-white">
            <h1 className="text-md mx-2">
              <Typed
                strings={[
                  "Get 10% Off Your First Order and Free Delivery for New Customers Savor Delightful Meals at Amazing Discounts",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </h1>
          </div>
        </div>
      </div>

      <nav className="bg-white fixed sticky w-full mx-auto z-20 top-0 left-0 dark:border-primary-600">
        <div className="px-4 md:mx-36">
          <div className="flex justify-between items-center h-full">
            <div className=" ">
              {/* Logo on the left */}
              <Link to="/" className="flex items-center">
                <img
                  src={"./assets/logo.png"}
                  loading="lazy"
                  className="h-12 mr-3"
                  alt="little lemon Logo"
                />
              </Link>
            </div>
            <button
              onClick={openDialog}
              className="block sm:hidden md:hidden text-primary-900" // Hide on medium and large screens
            >
              <FaBars />
            </button>

            <Drawer anchor="left" open={dialogOpen} onClose={closeDialog}>
              <List>
                {menus.map((menuItem: MenuType) => (
                  <ListItem
                    button
                    key={menuItem.path}
                    component={Link}
                    to={menuItem.path}
                    onClick={closeDialog}
                    className={`${
                      pathname === menuItem.path
                        ? "text-yellow-600 current-location"
                        : ""
                    }`}
                  >
                    <ListItemText primary={menuItem.name} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <div className="hidden md:flex space-x-6 items-center">
              {/* Desktop menus */}
              <ul className="flex flex-wrap justify-between items-center p-4 md:p-0 mt-4 font-medium border border-primary-100 rounded-lg bg-primary-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-primary-800 md:dark:bg-primary-900 dark:border-primary-700">
                {/* Center-aligned menus */}
                <div className="flex justify-start space-x-4">
                  {menus.map((menuItem: MenuType) => (
                    <li key={menuItem.path}>
                      <Link
                        to={menuItem.path}
                        className={`block py-8 hover:text-primary text-md radius-md p-4 text-center text-primary-900 rounded ${
                          pathname === menuItem.path ? "text-yellow-600 " : ""
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
    </>
  );
}
