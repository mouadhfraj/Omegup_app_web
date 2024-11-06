import{ContAbout } from '../../index'
import{AboutData} from '../../../Data/AboutData'
import './About.css'
const About = () => {
  return (
    <div class="row   about ">
            {AboutData.map((data)=>(   <ContAbout icon={data.icon} title={data.title} disc={data.disc}/> ))}
                </div>
  )
}

export default About