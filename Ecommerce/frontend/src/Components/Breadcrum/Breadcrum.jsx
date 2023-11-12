import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {meal} = props
  return (
    <div className='breadcrum'>
         <p>{props.id}</p>
         HOME <img src={arrow_icon} alt="" />
         ORDER <img src={arrow_icon} alt="" />
         {props.category} <img src={arrow_icon} alt="" />
         {props.name}

    </div>
  )
}

export default Breadcrum
