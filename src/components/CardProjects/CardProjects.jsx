
import './CardProjects.css'
import { Link } from 'react-router-dom'
function CardProjects(props) {
  
 
  return (
    <>
     <div className='col-lg-3 col-sm-5 col-12 sur-container'>
     <div className="card-container  ">
        <div className="image-container container">
            <img  src={props.img} alt="" />
        </div>
     <div className="card-content">
     <div className="card-title">
            <h3>{props.title}</h3>
        </div>
        <div className="card-body">
            <p className='text-secondary'>{props.discription}</p>
        </div>
      
     </div>
     <div className="bton">
           
                <Link to={props.reference} className='text-info' href="">View more</Link>
          
        </div>
       
        
     </div>
     </div>
    </>
  )
}

export default CardProjects