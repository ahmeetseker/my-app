
  import React from 'react'
  import { motion } from 'framer-motion'
  import { fadeIn, textVariant } from '../../utils/motion'
  import { styles } from '../../styles'
  import { testimonials } from '../../constants'
  import { SectionWrapper } from "../../hoc";
  import { useTranslation } from 'react-i18next';

  const FeedbacksCard = ({index,testimonial ,name ,designation ,  company , image}) => (

    <motion.div 
    variants={   fadeIn('','spring',index * 0.5, 0.75)  }
    className='bg-black-200 p-4 rounded-3xl sm:w-[320px]  '>

    
        <p className='text-white  text-[18px] !text-wrap'>{testimonial}</p>
          <div className='mt-7 flex justify-between items-center  gap-1'>

              <div className='flex-1 flex flex-col'>
                  <p className='text-white  font-medium text-[16px]'>    

                    <span className='blue-text-gradient'>@</span> {name}


                  </p>

                  <p className='mt-1 text-secondary text-[12px]'> 

                  {designation} of {company}

                  </p>
              </div>

              <img src={image} alt={`feed-by-${name}`} 
                className='w-10 h-10 rounded-full object-cover'
              
              />


          </div>
      
    </motion.div>
  )



  const Feedbacks = () => {
    const { t } = useTranslation();
    return (
        <div className='mt-12 bg-black-100 rounded-[20px]'>

              <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}>

                <motion.div  
                variants={textVariant()}
                >
                  <p className={styles.sectionSubText}>
                      {t("whatOhtersSay")}
                    
                  </p>

                  <h2 className={styles.sectionHeadText}>{t("testimonialsHead")}</h2>
                </motion.div>
              </div>


              <div className={`${styles.paddingX }  -mt-20 sm:justify-center  pb-14 flex flex-wrap	gap-7`}>

                  {testimonials.map((testimonial , index ) => (

                      <FeedbacksCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                        testimonial={t(testimonial.testimonial)}

                        name={t(testimonial.name)}

                        designation={t(testimonial.designation)}
                        company={t(testimonial.company)}
                  
                      />

                  
                    

                  )
                  
                  
                  )}
              </div>
          
          </div>

      )
  }

  export default SectionWrapper(Feedbacks,'')