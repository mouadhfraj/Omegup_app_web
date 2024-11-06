import React from 'react'
import './Projects.css'
import {Contprojects} from '../../index'
import { ProjectsData } from '../../../Data/ProjectsData'
import ContProjects from '../../ContProjects/ContProjects'
const Projects = () => {
  return (
<>

         <div className="projects">
         {ProjectsData.map((data)=>(   <ContProjects img={data.img} title={data.title} discription={data.discription} reference={data.reference}/> ))}
         </div>
               
</>
  )
}

export default Projects