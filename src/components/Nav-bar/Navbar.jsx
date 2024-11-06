import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react"
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import logo from "../../assets/Artboard 1.png"
const Navbar = () => {
  const[isMobile, setIsMobile] = useState(false);
 

  return (
    <nav>
    <Link to={"#"} className="nav_brand"><img src={logo} alt="" /></Link>
      <ul className={ isMobile ? "nav-menu-mobile" : "nav_menu"  } onClick={() => setIsMobile(false)}>
        <Link to="/" className="nav_link"><li className="nav_items">Home</li></Link>
        <Link to="/About" className="nav_link"><li className="nav_items">About</li></Link>
       <Link to="/Projects" className="nav_link"> <li className="nav_items">Projects</li></Link>
       <Link to="/Contact" className="nav_link"> <li className="nav_items">Contact</li></Link>
        <Link to="#" className="nav_link btn btn-outline-light"><li className="nav_items">Join us</li></Link>
      </ul>
      <button className="mobile-menu-icon"onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (<FiX/>) : (<FiMenu/>)}
      </button>
    </nav>
  )
}

export default Navbar