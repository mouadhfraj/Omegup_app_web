import React from 'react'
import './Cont.css'

const Cont = (props) => {
  return (
    <>
    <div class=" cont col-12 col-sm-4 ms-5">
                <div class="icon">
                    <img src={props.icon} alt=""/>

                </div>
                <p>{props.text}</p>

            </div>
    </>
    )
}

export default Cont