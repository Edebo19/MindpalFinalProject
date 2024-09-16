import React from 'react'
import "./Login.css"
import loginlogo from "../../assets/loginlogo.png"
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const loginUser =()=>{
    nav("/loggedin")
  }
  return (
    <>
      <div className="login">
      
        <div className="loginLogoBox">
          <div className="loginLogo"> <img src={loginlogo} alt="" srcset="" /> </div>
          <h4>Login</h4>
        </div>
        <div className="loginInformation">
          <span className="topWriteUp">
            <h1 className="h1a">Welcome back!</h1>
            <p>Enter to get unlimited access to data & information</p>
          </span>
          <div className="loginInput">
            <div className="loginInputBox">  <input placeholder='Enter your E-mail address' /> </div>
            <div className="loginInputBox">
              <input placeholder='Password' />
             <div className="loginEye"> <IoEye /> </div>
            </div>
           
          </div>
          <p className="centerWriteUp">Forgot Password?</p>
          <button onClick={loginUser}>Log in</button>
          <span className="bottomWriteUp">
            <p className="bottomWriteUp1">Don't have an account?</p>
            <p className="bottomWriteUp2" onClick={()=>nav("/signup")}>Sign up</p>
          </span>
        </div>

      </div>
    </>
  )
}

export default Login