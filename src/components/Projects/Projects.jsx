import React from 'react'
import { CardProjects ,Section,SectionTitle} from '../index'
import {ProjectsData} from '../../Data/ProjectsData'
const Projects = () => {
    const  cards = ProjectsData.map((card,index) => {
        return(<CardProjects key={index} title={card.title} img={card.img} discription={card.discription} reference={card.reference} />)
    })
  return (
   
    <>
     <Section>
     <SectionTitle>Projects</SectionTitle>
      <div className='section-items'>
      {cards}
      </div>
    </Section>
    
    </>
  )
}

export default Projects