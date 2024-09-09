import React from 'react'
import "./Signup.css"
import loginlogo from "../../assets/loginlogo.png"
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="signup">
      
        <div className="signupLogoBox">
          <div className="signupLogo"> <img src={loginlogo} alt="" srcset="" /> </div>
          <h4>Create your account</h4>
        </div>
        <div className="signupInformation">
          <span className="TherapistSignupWrtiteup">
            <p className="loginfromsignup" onClick={()=>nav("/therapist-signup")} style={{color:"#3FB480", fontWeight:"bold"}} >Sign up as a therapist</p>
          </span>
          
          <div className="signupBox">
          <p className="signupP"> Enter to get unlimited access to data & information </p>
            <div className="signupInputBox">
              <input className="signupInput" placeholder='First Name' />
            </div>
            <div className="signupInputBox">
              <input className="signupInput" placeholder='Last Name' />
            </div>
            <div className="signupInputBox">
              <input className="signupInput" placeholder='Enter your E-mail address' />
            </div>
            <div className="signupInputBox">
              <input className="signupInput" placeholder='Password'/>
              <div className="signupEye"> <IoEye /> </div>
            </div>
            <button className="signupButton" onClick={()=>nav("/login")}>Sign up</button>
          </div>
          <span className="signupWrtiteup">
            <h1 className="signupP" style={{fontWeight:"bold"}}>Already have an account?</h1>
            <p className="loginfromsignup" onClick={()=>nav("/login")} style={{color:"#3FB480", fontWeight:"bold"}} >Login</p>
          </span>
        </div>

      </div>
    </>
  )
}

export default Signup