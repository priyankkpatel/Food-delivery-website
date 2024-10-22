import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowlogin }) => {
    const [CurrState , setCurrState] = useState(("Login"))
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{CurrState}</h2>
                <img onClick={ ()=> setShowlogin(false)} src= {assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {CurrState === "Login" ? <></> : <input type="text"placeholder='your name' required name="" id="" />}
                <input type="email" placeholder='your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{CurrState==="Sign up" ? "Create account" :"Login" }</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing , i agree to the terms of the user & privacy policy.</p>
            </div>
            {CurrState === "Login" 
            ?<p>Create a new account ? <span onClick={()=> setCurrState("Sign up")}>Click here</span> </p>
            :<p>Already have Account ? <span onClick={()=> setCurrState("Login  ")}> Log in here</span></p> }
            
            
        </form>
    </div>
  )
}

export default LoginPopup
