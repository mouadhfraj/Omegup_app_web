import { Header,Container,Footer, } from "./components/index"
import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import {ProjectsData} from './Data/ProjectsData'

import {Home,Contact,Darinov,Apia,Jupiter,AbcSchool,About,Projectspage,Projects} from './components/Pages/index'
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom"

const App = () => {
  const  routeProjects = ProjectsData.map((card) => {
    return(  <Route path={card.reference} element={card.elem}/>)
})
  return (
    <>
   
     <Router>
    <Header/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/darinov' element={<Darinov/>}/>
        <Route path='/apia' element={<Apia/>}/>
        <Route path='/jupiter' element={<Jupiter/>}/>
        <Route path='/abcschool' element={<AbcSchool/>}/>
      </Routes>
   
 
    <Footer/>
    </Router>
    </>
  )
}

export default App
