import React from 'react';
import { useTranslation } from 'react-i18next';

import TR from '../../assets/tr.svg'
import EN from '../../assets/en.svg'


function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="flex">
      <button
        className={`p-2 rounded-[30px] mr-2 ${
          i18n.language === 'en' ? 'bg-[#aaa6c3]' : 'bg-transparent'
        }`}
        onClick={() => changeLanguage('en')}


      >

<img src={EN} className='w-[50px]  h-[30px]' alt="" />
      
      </button>
      <button
        className={`p-2 rounded-[30px] ${
          i18n.language === 'tr' ? 'bg-[#aaa6c3]' : 'bg-transparent'
        }`}
        onClick={() => changeLanguage('tr')}
      >
       
        <img src={TR} className='w-[50px]  h-[30px]' alt="" />
      </button>
    </div>
  );
}

export default LanguageSelector;
