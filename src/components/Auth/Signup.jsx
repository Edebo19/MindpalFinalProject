import React, { useState } from 'react'
import "./Signup.css"
import loginlogo from "../../assets/loginlogo.png"
import { IoEye, IoEyeOff } from "react-icons/io5";
import { replace, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BiLoaderCircle } from 'react-icons/bi';
import Swal from 'sweetalert2';

const Signup = () => {
  const nav = useNavigate()
  const [email, setEmail] = useState("")
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setpassword] = useState("")
  const [emailErrorMsg, setEmailErrorMsg] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [loading, setLoading] = useState()
  const [passwordVisible, setPasswordVisible] = useState(false); 


  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };
  const containsUppercase = (input) => {
    return /[A-Z]/.test(input);
    };
    const containsSymbol = (input) => {
      return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
    };

  const handleEmail=(e)=>{
    const newEmail = e.target.value
    setEmail(newEmail)

    if(newEmail.trim() === '') {
      toast.error('Email is required');
  }else if (!validateEmail(newEmail)) {
    setEmailError(true)
    setEmailErrorMsg('Invalid email format');
  } else {
    setEmailErrorMsg(null)
    setEmailError(false)
  }

  }
  
  const validatePassword = (newData) => {
    let errorMessage = '';

    if (newData.length < 8) {
      errorMessage += 'Password must be at least 8 characters long. ';
    }
    if (!containsUppercase(newData)) {
      errorMessage += 'Password must contain at least one uppercase letter. ';
    }
    if (!containsSymbol(newData)) {
      errorMessage += 'Password must contain at least one special character. ';
    }

    if (errorMessage) {
      setPasswordError(true);
      setPasswordErrorMsg(errorMessage.trim());
    } else {
      setPasswordError(false);
      setPasswordErrorMsg('');
    }
  };

  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setpassword(newPassword);
    validatePassword(newPassword);
  };
  const SignUpFunction =()=>{
    setLoading(true)
    if (!email || !password || !firstName || !lastName) {
      toast.error("Please fill all fields")
    } else if (emailError || passwordError) {
      toast.error("Please correct the errors before submitting");
    } else {
      const data = {firstName, lastName, email, password}
      const url = " https://mind-pal-8a5l.onrender.com/api/v1"
      const signUpUrl = `${url}/user/sign-up`
      console.log(data)
      axios.post(signUpUrl, data)
      .then((res)=>{
        console.log(res)
        setLoading(false)
        Swal.fire({
          title: 'Hi there! 😊👋',
          text: `${res.data.message}`,
          icon: 'success',
          customClass: {
            popup: 'my-popup-class',          // Custom class for the popup
            title: 'my-title-class',          // Custom class for the title
            content: 'my-content-class',      // Custom class for the content
            confirmButton: 'my-confirm-class', // Custom class for the confirm button
            cancelButton: 'my-cancel-class'   // Custom class for the cancel button
          },
        }).then((result) => {
          if (result.isConfirmed) {
            nav(`/login`);
          }
        });
      })
      .catch((error)=>{
        setLoading(false)
        console.log(error)
        toast.error("Sign up unsuccessful!")
      })

    }
  }
const goHome=()=>{
  nav("/"),
  {replace: true}
}


  return (
    <>
      <div className="signup">
      
        <div className="signupLogoBox">
          <div className="signupLogo"> <img src={loginlogo} alt="" style={{cursor:"pointer"}} onClick={goHome}/> </div>
          <h4>Create your account</h4>
        </div>
        <div className="signupInformation">
          <span className="TherapistSignupWrtiteup">
            <p className="loginfromsignup" onClick={()=>nav("/therapist-signup")} style={{color:"#3FB480", fontWeight:"bold"}} >Sign up as a therapist</p>
          </span>
          
          <div className="signupBox">
          <p className="signupP"> Enter to get unlimited access to data & information </p>
            <div className="signupInputBox">
              <input type='text' className="signupInput" onChange={(e)=>setFirstname(e.target.value)} placeholder='First Name' required={true}/>
            </div>
            <div className="signupInputBox">
              <input type='text' className="signupInput" onChange={(e)=> setLastName(e.target.value)} placeholder='Last Name' required={true}/>
            </div>
            <div className="signupInputBox">
              <input type='email' className="signupInput" onChange={handleEmail} placeholder='Enter your E-mail address' required={true} />
            </div>
            <>
              {
                emailError ? <p style={{color:"red", paddingInline:"5px", fontFamily:"inherit"}}>{emailErrorMsg}</p>: null
              }
            </>
            <div className="signupInputBox">
              <input
                className="signupInput"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handlePassword}
              />
              <div className="signupEye" onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <IoEyeOff /> : <IoEye />}
              </div>
            </div>
            <>
              {
                passwordError ? <p style={{color:"red", paddingInline:"5px", fontFamily:"inherit"}}>{passwordErrorMsg}</p>: null
              }
            </>
            <button className="signupButton" onClick={SignUpFunction}>
                {loading ? <BiLoaderCircle className="mr-2 animate-spin" size={25} />  : "Sign Up"}
              </button>
          </div>
          <span className="signupWrtiteup">
            <h1 className="signupP" style={{fontWeight:"bold"}}>Already have an account?</h1>
            <p className="loginfromsignup" onClick={()=>nav("/therapistlogin")} style={{color:"#3FB480", fontWeight:"bold"}} >Login</p>
          </span>
        </div>

      </div>
    </>
  )
}

export default Signup