import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select className='pl-4 pr-3 p-2 rounded-md bg-[#aaa6c3] border-r-8 border-transparent'  onChange={changeLanguage} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="tr">Türkçe</option>
    </select>
  );
}

export default LanguageSelector;
