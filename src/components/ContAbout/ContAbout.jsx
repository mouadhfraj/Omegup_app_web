import React from 'react'
import './ContAbout.css'
const ContAbout = (props) => {
  return (
    <>
    <div class=" contAbout col-12 col-sm-5 ms-5">
               <div className='tit'>
               <div class="icon1">
                    <img src={props.icon} alt=""/>

                </div>
                <h5>{props.title}</h5>
               </div>
                <p className='text-secondary ms-5'>{props.disc}</p>

            </div>
    </>
  )
}

export default ContAbout