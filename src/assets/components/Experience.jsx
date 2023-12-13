
import React from 'react'


import { motion } from 'framer-motion';
import { VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';


import { styles } from '../../styles';

import { SectionWrapper } from '../../hoc';
import { textVariant } from '../../utils/motion';

import { experiences } from '../../constants';
import { Points } from '@react-three/drei';



const ExperinceCard = ({experience,t}) => (

<VerticalTimelineElement 
 contentStyle={{background:'#1d1836', color: '#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631 '}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={

    <div className='flex justify-center items-center h-full'>

      <img src={experience.icon} alt={experience.comapany_name} 
          className='w-[45px] h-[60%]  object-contain'
      
      />
    </div>
  }
  >

    <div>

      <h3 className=' text-white text-[24px] font-bold '> {experience.title}</h3>
      <p className=' text-secondary text-[16px] font-semibold' style={{margin:0  }}>{experience.comapany_name}</p>
    <ul className='mt-5  list-disc ml-5 space-y-2  '>
      {experience.points.map((point,index) => (

        <li  key={`experince-point-${index}`}
              className='text-white text-[14px] pl-1 tracking-wider'
        >

          {t(`experiences.${experience.company_name}.points.${index}`)}

        </li>
      ))}

    </ul>
    </div>
    {t(`experiences.${experience.company_name}.date`)}
</VerticalTimelineElement>


)

const Experience = ({t}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>{t('Progress')}</p>

<h2 className={`${styles.sectionHeadText} text-center`}>{t('WorkExperience')}</h2>

<div className='mt-20 flex flex-col '> 
    <VerticalTimeline>
      {experiences.map((experience , index) =>
      
      <ExperinceCard 
       key={index}
       experience={experience}
       t={t}

      
      />
      
      
      
      )}

    </VerticalTimeline>

</div>

      </motion.div>
    
    </>
  )
}

export default Experience