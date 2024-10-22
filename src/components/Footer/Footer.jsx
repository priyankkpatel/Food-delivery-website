import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto voluptatem modi ad at facilis reiciendis omnis suscipit sunt iste quo autem iusto, tenetur accusantium error, nisi vitae dignissimos! Obcaecati.</p>
            <div className="footer-social-icons">
                <img src = {assets.linkedin_icon} alt= '' /><img src = {assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" />

            </div>
        </div>
        <div className="footer-content-center">
            <h2>Food Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Gett in Touch</h2>
            <ul>
                <li>9429130365</li>
                <li>priyank0908patel@gmail.com</li>
            </ul>
        </div>
       
        </div>
        <hr />
        <p className="copyright-content">All Right Reserved </p>
    </div>
  )
}

export default Footer
