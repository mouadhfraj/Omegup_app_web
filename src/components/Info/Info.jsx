import React from 'react'
import {Cont, SectionTitle,Section} from '../index'
import {InfoData} from  '../../Data/InfoData'
import './Info.css'

const Info = () => {
  return (
    <>
       <SectionTitle>Contact</SectionTitle>
        <div class="row   info ">
            {InfoData.map((info)=>(   <Cont icon={info.icon} text={info.text}/> ))}
                </div>
    </>
  )
}

export default Info