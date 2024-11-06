import './Section.css'

const Section = (props) => {
  return (
    <> 
     <div className='container section'>
    {props.children}
     </div>
     
     </>)
   
}

export default Section