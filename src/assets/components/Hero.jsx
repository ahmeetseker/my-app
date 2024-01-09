import React from 'react'
import { styles } from '../../styles';
import { ComputersCanvas } from './canvas';
import { motion } from 'framer-motion';

const Hero = ({t}) => {
  return (
   <section className='relative w-full h-screen mx-auto'>

    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
       <div className='flex flex-col justify-center items-center mt-5'>

        <div
            className='w-5 h-5 rounded-full bg-[#915eff]'
        />

        <div className='w-1 sm:h-80 h-40 violet-gradient' />
       </div>

       <div>
        
        <h1 className={`${styles.heroHeadText}`}>
          {t('welcome')} <span className='text-[#915eff]'>Ahmet</span>
          </h1> 
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
               {t('HeroDesc')}

            <br className='sm:block hidden' />

            {t('HeroDescAlt')}

          </p>
          </div>


    </div>

    <ComputersCanvas/>

    <div className='absolute sm:-bottom-4 flex bottom-32 w-full justify-center items-center ' >

      <a href="#about">

        <div className='border-4 w-[34px] h-[64px] justify-center rounded-3xl border-secondary flex items-start p-2'>

          <motion.div

          animate={{

            y:[0,24,0],
          }}
          transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:'loop'

          }}
          className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>


    </div>

   </section>
  )
}

export default Hero