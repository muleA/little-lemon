import menus from "@libs/utils/navigation-menus";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
type MenuType={
  name:string,
  path:string
}
export const Header2 = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => setIsNavExpanded(!isNavExpanded);

  return (
    <>
      <nav className="bg-white dark:bg-primary-900 fixed sticky w-full z-20 top-0 left-0 border-b
       border-primary-200 dark:border-primary-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="/" className="flex items-center">
            <img
              src="./assets/logo.png"
              loading="lazy"
              className="h-12 mr-3"
              alt="little lemon  Logo"
            />
          </Link>
          <div className="flex md:order-2">
         

            <button
              className="col-span-1 sm:hidden justify-self-end inline-block w-10 h-10 m-0 p-0 bg-transparent border-none"
              type="button"
              onClick={toggleNav}
            >
              {isNavExpanded ? (
                <FaTimes className="text-[#495E57]" size="2x" />
              ) : (
                <FaBars className="text-[#495E57]" size="2x" />
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:w-auto md:order-1 md:flex md:space-x-8 ${
              isNavExpanded ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            
            <ul
  className={`flex flex-wrap justify-center items-center p-4 md:p-0 mt-4 font-medium border border-primary-100 rounded-lg bg-primary-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-primary-800 md:dark:bg-primary-900 dark:border-primary-700`}
>
  {menus?.map((menuItem: MenuType) => (
    <li key={menuItem.path}>
      <Link
        to={menuItem.path}
        className={`block py-8 pl-3 pr-4 text-center text-primary-900 rounded ${pathname === menuItem.path ? 'text-yellow-600 current-location' : ''}  hover:bg-primary-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-primary-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-primary-700`}
      >
        {menuItem.name}
      </Link>
    </li>
  ))}
  <button
    type="button"
    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 
    font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-primary-600 dark:hover:bg-primary-700 
    dark:focus:ring-primary-800"
  >
    Log In
  </button>
  <button
    type="button"
    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 
    font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-primary-600 dark:hover:bg-primary-700 
    dark:focus:ring-primary-800"
  >
    Sign Up
  </button>
  
</ul>

            
          </div>
        </div>
      </nav>
    </>
  );
};
