import './HomeMain.css'
import image from '../../assets/12704333_5052258.jpg'
import {Section} from '../index'

function HomeMain() {
  return (
<>
<Section >
      <div className='row align-items-center justify-content-between ms-5'>
     <div className='col-lg-6 col-12 mt-3'>
      <h1 className='text-primary titleone '>OmegUp</h1>
      <h1 className='titletwo'>Develop your <em className='text-primary '>digital tools</em></h1>
     <br />
     <p className='text-secondary titlethree'>OmegUp supports your ideas and helps create your website, mobile application, marketplace...
     <br />
     With our developers and experts, all your innovations are possible.</p>
     <br />
    <a href="#"> <div className='btn btn-outline-primary w-40 joinus'>Join us</div></a>
    
    </div> 
    <div className='col-lg-6 col-12 '>
    <img src={image} className='img ' alt="" />
      </div> 
    </div>
    </Section>
</>
  )
}

export default HomeMain