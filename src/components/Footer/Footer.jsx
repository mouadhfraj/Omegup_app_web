import logo from '../../assets/Artboard 1.png'
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className=" footerMain">
    <div className='container  '>
    <div className="row  ms-5 mt-5 ">
      <div className="  case col-lg-4  col-12">
        <img src={logo} alt="" />
        <p className='text-secondary w-75 ms-5'>OmegUp supports your ideas and helps creating your website, mobile application and marketplace.</p>
        <a href="#" className="link btn btn-outline-primary ms-5">Join us</a>
      </div>
      <div className="  case col-lg-4  col-12">
        <h4 className='links'>Links</h4>

       <div className="links">
       <Link to='/Home' href="">Home</Link> 
        <Link to='/About' href="">About</Link> 
        <Link to='/Projects' href="">Projects</Link> 
        <Link to='/Contact' href="">Contact</Link> 
       </div>
        
   
      </div>
      <div className="  case col-lg-4  col-12 ">
        <h4>Contact</h4>
        <div className="contact "><FiMapPin className='text-primary'/><span className='text-secondary ms-2'>10, Cyber Park Zarzis, Medenine</span></div>
        <div className="contact "><FiMail className='text-primary'/><span className='text-secondary ms-2'>contact@omegup.tn</span></div>
        <div className="contact "><FiPhone className='text-primary'/><span className='text-secondary ms-2'>+216 28 827 941</span></div>
        <p></p>
      </div>
    </div>
    </div>
    <div className="copyright">
      <p>© Copyright 2022 powered by OmegUp</p>
    </div>
    </div>
    </>
  )
}

export default Footer