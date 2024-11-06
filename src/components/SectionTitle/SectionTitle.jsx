import './SectionTitle.css'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
const SectionTitle = (props) => {
 useEffect(
    () => { AOS.init({duration: 3000})}
 )

  return (
    <div className='titleSection text-primary-emphasis' data-aos="fade-right">
    <h1>{props.children}</h1>
    </div>
  )
}

export default SectionTitle