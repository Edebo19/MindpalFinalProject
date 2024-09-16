import React from 'react'
import "./Thesignup.css"
import loginlogo from "../../assets/loginlogo.png"
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Thesignup = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="thesignup">
      
        <div className="thesignupLogoBox">
          <div className="thessignupLogo"> <img src={loginlogo} alt="" srcset="" /> </div>
          {/* <h4>Create your account</h4> */}
          <h4>Create your account</h4>
        </div>
        <div className="thesignupInformation">
          <span className="thesignupWrtiteup">
            <p className="thesignupP" style={{fontWeight:"bold"}}>Already have an account?</p>
            <p className="thesignuplogin" style={{color:"#3FB480", fontWeight:"bold"}}>Login</p>
          </span>
          
          <div className="thesignupBox">
          <p className="thesignupP"> Enter to get unlimited access to data & information </p>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder='First Name' />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder='Last Name' />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder='Specialty' />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder='Upload your id card' />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder='Upload your certificate' />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder='Phone number' />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder='Email' />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder='Password'/>
              <div className="thesignupEye"> <IoEye /> </div>
            </div>
            <button className="thesignupButton" onClick={()=> nav("/therapistlogin")}>Sign up</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Thesignup