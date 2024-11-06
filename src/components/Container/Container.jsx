
import './Container.css'
import {Home,Contact} from '../Pages/index'
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom"
const Container = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
 
    
    </>
    
  )
}

export default Container