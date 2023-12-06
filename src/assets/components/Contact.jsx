import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { styles } from '../../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';



const Contact = () => {
  const formRef = useRef();
  const [from,setForm] = useState({
    name:' ',
    email:' ',
    message:' ',

  });
  const [loading , setLoading] = useState(false);
  const handleChange  = (e)  => {}

  const handleSumbit =  (e) => {}

  return(

    <div className='xl:mt-12  xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div variants={slideIn('left' ,'tween',0.2,1)}  
                  className='flex-[0.75] bg-black-100 p-8 rounded-2xl '
        >
            <p className={styles.sectionSubText}>

              Get  in touch 
            </p>

            <h3 className={styles.sectionHeadText}>Contcat.</h3>

            <form ref={formRef} 
                  onSubmit={handleSumbit}
                  className='mt-12 flex flex-col gap-8'

                  >

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your name</span>

                        <input type="text"
                                name='name'
                              
                                onChange={handleChange}
                                placeholder='what is  your name'
                                className='bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

                        
                        />


                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>

                        <input type="email"
                                name='email'
                           
                                onChange={handleChange}
                                placeholder='what is  your name'
                                className='bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

                        
                        />


                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>

                        <textarea type="text"
                                rows='7'
                                name='Message'
                                onChange={handleChange}
                                placeholder='what is  your name'
                                className='bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

                        
                        />


                    </label>

                    <button type='submit' 
                            className='bg-tertiary py-3 px-8 outline-none w-fit text-white  font-bold shadow-md shadow-primary  rounded-xl'
                    >{loading ? 'Sending...' : 'Send' }</button>

                  </form>

        </motion.div>


        <motion.div   
         variants={slideIn('right',  'tween'  , 0.2 ,1 )}
         className='xl:flex-1 xl:h-auto md:h-[550px]  h-[250px]'
        >

      <EarthCanvas/>

        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact , 'concant')