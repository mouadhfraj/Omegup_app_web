import './Card.css'


const Card = (props) => {
  return (
    <>
      
      
        <div className='card_serv col-lg-3 col-sm-6 col-12 '>
          
        <div className="img"><img className='' src={props.img} alt="" /></div>
          
         
         <div className="card_title">
            <h5 className='text-info'>{props.title}</h5>
          </div>
          <div className="card_discription ">
            <p className='text-secondary'>{props.discription1}</p>
            <p className='text-secondary'>{props.discription2}</p>
            <p className='text-secondary'>{props.discription3}</p>
            <p className='text-secondary'>{props.discription4}</p>
          </div>
        



        </div>
        
    </>
    )
}

export default Card