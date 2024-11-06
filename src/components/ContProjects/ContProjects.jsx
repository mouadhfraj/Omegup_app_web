import React from 'react'
import { Link } from "react-router-dom";
import './ContProjects.css'
const ContProjects = (props) => {
  return (
    <>
    <div className="card" >
      <img src={props.img} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div className="text-section">
      <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.discription}</p>
      </div>
       <div className="cta-section">
       <Link to={props.reference} className="btn btn-primary">VIEW MORE</Link>
       </div>
      </div>
    </div>
      </>
  )
}

export default ContProjects