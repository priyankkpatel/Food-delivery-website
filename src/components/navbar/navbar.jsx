import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
const navbar = ({setShowlogin }) => {

  const [menu , setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src= { assets.logo  } alt="" />
      <ul className="navbar-menu">
        <li onClick={()=> setMenu("home")} className={ menu==="home"? "active": "" }>home</li>
        <li onClick={()=> setMenu("menu")} className={ menu==="menu"? "active": "" } >menu</li>
        <li onClick={()=> setMenu("mobile-app")} className={ menu==="mobile-app"? "active": "" }>mobile- app</li>
        <li onClick={()=> setMenu("contact-us")} className={ menu==="contact-us"? "active": "" }>Contact us </li>
      </ul>
      
      <div className="navbar-right">
        <img src={assets.search_icon}alt="" />
        <div className="navbar-search_icon">
          <img link src={assets.basket_icon} alt="" />
          <div className='dot'></div>
        </div>
        <button onClick={()=> setShowlogin(true)}>sign in </button>
      </div>
    </div>
  )
}

export default navbar
