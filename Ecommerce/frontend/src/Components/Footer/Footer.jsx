import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/foodies.png'
import instagram_icon from '../Assests/instagram_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Yammy</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-soxil-icon">
        <div className="footer-icon-containner">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-containner">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-containner">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - all right reserved.</p>
      </div>
    </div>
  )
}

export default Footer
