import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { services } from '../../constants'
import {fadeIn , textVariant} from '../../utils/motion'
import { useTranslation } from 'react-i18next';

import { SectionWrapper } from '../../hoc'



const ServiceCard =({title,index,icon})=> {
  return(
    <Tilt className='sm:w-[250px] w-full'>
      <motion.div variants={fadeIn('right','spring',0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px]  rounded-[20px] shadow-card'>

        <div 
         option={{
          max:45,
          scale:1,
          speed:450,
         }}
           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly  items-center flex-col'>


              <img src={icon} alt={title} className='w-16 h-16 object-contain ' ></img>

              <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>



        </div>




     </motion.div>
        </Tilt>
 
  
  )
} 

const About = () => {
  
  const { t } = useTranslation();

  return (
    <>
    <motion.div variants={textVariant()}>


      <p className={styles.sectionSubText}>{t("Intruction")}</p>

      <h2 className={styles.sectionHeadText}>  {t("Overview")}</h2>

      <motion.p variants={fadeIn('','','0.1','1')}>

      {t("deneme")}

      </motion.p>



    <div className='mt-20 flex flex-wrap gap-10 '>


      {services.map((service,index) => (
        <ServiceCard key={services.title } index={index} {...service} />

        
      ))  }
    </div>


    </motion.div>
    
    </>
  )
}

export default SectionWrapper(About, 'about')
