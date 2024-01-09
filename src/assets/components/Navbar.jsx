import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import {LanguageSelector} from "./Language";
import {LanguageSelectorMobile} from './LanguageSelectorMobile'


const Navbar = ({t}) => {


  const [active , setActive] = useState('');
  const [toggle , setToggle] = useState(false);

  return(
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}>
      
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

            <Link 
            to='/'
            className="flex items-center gap-2"
            onClick={()=>{
              setActive('')
              window.scrollTo(0,0);
            } }
            >

            <img src={logo} alt="logo" className="w-32 h-20 object-cover" />
            <p className="text-white font-bold cursor-pointer text-[18px]">Ahmet Şeker <span className="sm:hidden md:block"> Jr.Front end Developer</span> </p>
          
              </Link> 
              
              <ul className='list-none  sm:hidden md:flex gap-10'>
                     {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                       } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{t(nav.translationKey)}</a>
                    </li>
                  ))}
               </ul>
                    
       
              <div className='sm:flex md:hidden flex-1   justify-end items-center'>
                      <img src={toggle ? close : menu}
                        alt={menu}
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={()=> setToggle(!toggle)}
                     />

                     <div className={`${!toggle ?  "hidden" : "flex"}  p-6 bg-gradient-to-r black-gradient  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

                     <ul className='list-none flex  justify-end items-start flex-col  gap-4'>
                     {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                       } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => { 
                        setToggle(!toggle);
                        setActive(link.title);

                       
                      }}
                    >
                      
                      <a href={`#${link.id}`}>{t(link.translationKey)}</a>
                    </li>
                  ))}

      <LanguageSelectorMobile/>


               </ul>
                    
          
                      </div>
                
                 </div>

                 <div className=" ml-4 sm:hidden md:flex">
                    <LanguageSelector/>
                 </div> 
               
 
        </div>
    </nav>
  )
};

export default Navbar;