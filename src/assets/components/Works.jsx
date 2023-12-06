import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../../styles'
import { projects } from '../../constants'
import { fadeIn,textVariant} from '../../utils/motion'
import { motion } from 'framer-motion'
import { SectionWrapper } from "../../hoc";
import { github } from '..'



const ProjectCard =({index,name,description,tags,image,source_code_link}) => {
  return(

    <motion.div  
        variants={fadeIn('up','spring',index * 0.5 , 0.75)}
    >
        <Tilt   
         option={{
          max:45,
          scale:1,
          speed:450
         }}

         className='bg-tertiary  p-5 rounded-2xl  sm:w-[360px] w-full'

        >
          <div className='relative w-full h-[230px] '>
              <img src={image} alt={name}  className='w-full h-full object-cover rounded-2xl' />

              <div  className='absolute m-3  justify-end flex  inset-0 card-img_hover'>

                <div className='black-gradient w-10 h-10 rounded-full flex  items-center justify-center cursor-pointer  ' onClick={()=> window.open(source_code_link,'_blank') }>


                <img  
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
                />
                </div>

               
                
           
              </div>
          </div>

         <div className='mt-5'>
          <h3 className='text-white text-[24px] font-bold'>{name}</h3>
          <p className=' text-secondary mt-2  text-[14px]'>{description}</p>
      
         </div>

         <div className='flex flex-warp gap-2'>
         {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`} >
            #{tag.name}
          </p>
         ) ) }

         </div>
        </Tilt>
    </motion.div>
  )


}


const Works = () => {
  return (
    <>
      <motion.div variants={(textVariant())}>

        <p className={styles.sectionSubText}>
          My Work
        </p>

        <h2 className={styles.sectionHeadText}>Project</h2>

      </motion.div>


      <div className='w-full flex '>

        <motion.p  
           variants={fadeIn('','',0.1)}
           className="mt-3 text-secondary  text-[17px]  max-w-3xl leading-[30px] "

        >

        aciklama  aciklama aciklama aciklama aciklama aciklama aciklama aciklama  aciklama aciklama  aciklama aciklama aciklama aciklama
        aciklama  aciklama aciklama aciklama aciklama aciklama aciklama aciklama  aciklama aciklama  aciklama aciklama aciklama aciklama
        </motion.p>

      </div>

    <div className='mt-20 flex flex-wrap gap-7 '>

      {projects.map((project , index) =>

        <ProjectCard 
        key={`project-${index}`} 
        {...project}
         index={index}
        ></ProjectCard>
      
      
      )}
    </div>


    </>
  )
}

export default SectionWrapper(Works ,'');