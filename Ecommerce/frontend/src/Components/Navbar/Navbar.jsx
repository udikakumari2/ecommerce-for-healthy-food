import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../Assests/foodies.png'
import cart from '../Assests/shopping-cart.png'
const Navbar = () => {
    const [menu,setMenu]=useState('Home');
  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt="" />
     <p>Yummy</p>

    </div>
    <ul className="nav-menu">
    <li onClick={()=>{setMenu("Home")}}><Link className="dco"to="/">HOME</Link>{menu==="Home"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Breakfast")}}><Link className="dco" to="/Breakfast">BREAKFAST</Link>{menu==="Breakfast"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Lunch")}}><Link className="dco" to="/Lunch">LUNCH</Link>{menu==="Lunch"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Dinner")}}><Link className="dco" to="/Dinner">DINNER</Link>{menu==="Dinner"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
    <Link to='/login'><button>Login</button></Link>
    <Link to="/cart"><img src={cart} alt="" /></Link>
   
    
    
    <div className="nav-cart-count">0</div>
    </div>
      
    </div>
  )
}

export default Navbar
