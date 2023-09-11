/* eslint-disable @typescript-eslint/no-explicit-any */
import SetLanguage from '@libs/utils/i18n';
import React, { useState } from 'react';

const LanguageSelector = () => {
  // Define language options and flag icon URLs

  const languages = [
    { code: 'en', name: 'English', flagIcon: 'https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png' },
    { code: 'am', name: 'አማርኛ', flagIcon: './icons8-ethiopia-48.png' }, // Assuming this file is in the same directory
    // Add more languages as needed
  ];
 
  const [selectedLanguage, setSelectedLanguage] = useState('am'); // Default language

  const changeLanguage = async (code: React.SetStateAction<string>) => {
    setSelectedLanguage(code);
    await SetLanguage.i18n.changeLanguage(code as any); // Cast i18n to the I18n interface

    // Implement language change logic here
  };

  return (
    <div className="flex flex-row justify-center h-10 select-none">
      <div className="flex flex-row items-center right-1">
        {languages.map((language) => (
          <button
            key={language.code}
            className={`p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ${
              selectedLanguage === language.code ? 'bg-gray-200' : ''
            }`}
            onClick={() => changeLanguage(language.code)}
          >
            <span className="text-md">{language.name}</span>
            <span className="ml-1">
              <img src={language.flagIcon} alt={language.name} className="w-5 h-5" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
