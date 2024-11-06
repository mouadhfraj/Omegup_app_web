import {Section , Card, SectionTitle} from '../index'
import './Services.css'
import {ServicesData} from '../../Data/ServicesData'

const Services = () => {
    const  cards = ServicesData.map((card,index) => {
        return(<Card key={index} title={card.title} img={card.img} discription1={card.discription1} discription2={card.discription2} discription3={card.discription3} discription4={card.discription4}/>)
    })
  return (
   
    <>
     <Section>
     <SectionTitle>Services</SectionTitle>
      <div className='section-items'>
      {cards}
      </div>
    </Section>
    
    </>
  )
}

export default Services