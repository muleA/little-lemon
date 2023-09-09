import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import menus from "@libs/utils/navigation-menus";
const logoImage = "./assets/logo.png"; // Adjust the path based on your project structure.
import SetLanguage from "@libs/utils/i18n"; // Import the I18n interface

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => setIsNavExpanded(!isNavExpanded);

  const changeLanguage = async (language: string) => {
    await SetLanguage.i18n.changeLanguage(language); // Cast i18n to the I18n interface
  };
  return (
    <header>
    <nav className="container grid grid-cols-3 ">
      <Link className="col-span-1 justify-self-start self-center line-0" to="/">
        <img src={logoImage} alt="Little Lemon logo" loading="lazy" className="max-w-[15.625rem]" />
      </Link>
      <button className="col-span-1 sm:hidden justify-self-end inline-block w-10 h-10 m-0 p-0 bg-transparent border-none" 
      type="button" onClick={toggleNav}>
        {isNavExpanded ? <FaTimes className="text-[#495E57]" size="2x" /> : <FaBars className="text-[#495E57]" size="2x" />}
      </button>
  
      <ul className={`col-span-2 flex justify-end ${isNavExpanded ? 'left-0' : ''}`} onClick={toggleNav}>
        {menus.map((navLink) => (
          <li key={navLink.path}>
            <Link
              className={`flex items-center px-2 py-2 uppercase transition duration-500 
              ${pathname === navLink.path ? 'bg-[#F4CE14] current-location' : ''}`}
              to={navLink.path}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
{/*       <button onClick={() => changeLanguage("en")}>English</button>
 */}    </nav>
  </header>
  
  );
};

export default Header;
