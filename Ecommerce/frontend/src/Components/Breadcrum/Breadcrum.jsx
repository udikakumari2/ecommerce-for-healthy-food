import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {meals} = props
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />ORDER <img src={arrow_icon} alt="" />{meals.category} <img src={arrow_icon} alt="" />{meals.name}

    </div>
  )
}

export default Breadcrum
