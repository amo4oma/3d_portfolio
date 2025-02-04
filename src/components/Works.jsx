import { Tilt } from "react-tilt"
import {motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
 
import { fadeIn } from "../utils/motion"
import StarWrapper from "../hoc/SectionWrapper"
import { textVariant } from '../utils/motion';
import { projects } from "../constants"
import {BrowserView, MobileView} from 'react-device-detect';


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
})  =>{
return(
  <>
  <BrowserView>
  <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
 <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='opacity-1 bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="text-center mt-4">
        {source_code_link.map}
          <a className="w-[50px] bg-white text-purple-950 rounded-[25px] px-10 py-[5px] cursor-pointer hover:bg-purple-950 hover:text-white
          transition-all" onClick={() => window.open(source_code_link, "_blank")}>Go to Site</a>
        </div>
      </Tilt>  </div>
  </BrowserView>
  <MobileView>
  <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
 <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='opacity-1 bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="text-center mt-4">
        {source_code_link.map}
          <a className="w-[50px] bg-white text-purple-950 rounded-[25px] px-10 py-[5px] cursor-pointer hover:bg-purple-950 hover:text-white
          transition-all" onClick={() => window.open(source_code_link, "_blank")}>Go to Site</a>
        </div>
      </Tilt>  </div>
  </MobileView>
  </>
)
}


const Works = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <>
  <BrowserView>
  <div variants={fadeIn('up','spring',index * 0.5 ,0.75)}>
    <p className={`${styles.sectionSubText}`}>My Projects</p>
        <h2 className={styles.sectionHeadText}> Projects.</h2>
        <div className='w-full flex'>
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
 
 
      <div className="mt-20 flex flex-wrap gap-7 h-[100%] relative z-10">
        {projects.map((project, index )=>(
          <ProjectCard key={`project-${index}`} index={index} {...project}/>

        ))}
      </div>
<div className="w-full text-center mt-[90px]">
<a href="https://6436a30379f43108fdb40aca--sparkling-kelpie-620a3c.netlify.app/Projects/" className="rounded-[20px] py-[10px] px-[50px] bg-purple-900 w-[60px] text-white h-[60px] text-[17px] transition-all hover:bg-white hover:text-purple-950">More Projects</a>
</div>
      
   
  

    </div>
  </BrowserView>
  <MobileView>
  <div variants={fadeIn('up','spring',index * 0.5 ,0.75)}>
    <p className={`${styles.sectionSubText}`}>My Projects</p>
        <h2 className={styles.sectionHeadText}> Projects.</h2>
        <div className='w-full flex'>
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
 
 
      <div className="mt-20 flex flex-wrap gap-7 h-[100%] relative z-10">
        {projects.map((project, index )=>(
          <ProjectCard key={`project-${index}`} index={index} {...project}/>

        ))}
      </div>
<div className="w-full text-center mt-[90px]">
<a href="https://6436a30379f43108fdb40aca--sparkling-kelpie-620a3c.netlify.app/Projects/" className="rounded-[20px] py-[10px] px-[50px] bg-purple-900 w-[60px] text-white h-[60px] text-[17px] transition-all hover:bg-white hover:text-purple-950">More Projects</a>
</div>
      
   
  

    </div>
  </MobileView>
    </>
  )
}

export default StarWrapper(Works, 'work') 