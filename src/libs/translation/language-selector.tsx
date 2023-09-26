/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "./model/language";
import { FaChevronDown } from "react-icons/fa";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChangeLanguage = (newLanguage:any) => {
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("local", newLanguage);
    setIsDropdownOpen(false); // Close the dropdown when a language is selected
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className=" py-2 px-4 rounded-full flex items-center"
      >
        <img
          src={`./${selectedLanguage}.png`} // Replace with the path to your language image
          alt={languages[selectedLanguage]}
          className="w-6 h-6 mr-2"
        />
        {languages[selectedLanguage]}
        <FaChevronDown className="text-primary-900"/>
      </button>
      {isDropdownOpen && (
        <div className="absolute top-10 left-0 mx-auto text-center mt-2 bg-white border rounded-lg shadow-md">
          {Object.keys(languages)?.filter((item)=>item!==i18n.language)?.map((key) => (
            <button
              key={key}
              onClick={() => handleChangeLanguage(key)}
              className="block w-full py-2 px-4 text-left hover:bg-gray-200"
            >
                <span className="flex">
                <img
                src={`./${key}.png`} // Replace with the path to your language image
                alt={languages[key]}
                className="w-6 h-6 mr-2"
              />
              {languages[key]}
                </span>
             
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
