import React, { useState } from 'react'
import './ForgotPassword.css'
import authlogo from '../../assets/mainmain.png'
import axios from 'axios'
import { BiLoaderCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [emailErrorMsg, setEmailErrorMsg] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [loading, setLoading] = useState()


    const validateEmail = (input) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
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

    const forgotFunction =()=>{
        setLoading(true)
        const url = "https://mind-pal-8a5l.onrender.com/api/v1"
        const forgotUrl = `${url}/user/forgot-password`
        axios.post(forgotUrl, {email})
        .then((res)=>{
            setLoading(false)
            console.log(res)
            toast.success(`${res.data.message}`)

            setTimeout(()=>{
                navigate("/sent-email")
            }, 3000)
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            toast.error("request failed")
        }).finally(()=>{
            setLoading(false)
        })
    }
const navigate = useNavigate()


  return (
    <div className='ForgotPasswordHolder'>
        <div className="AuthSide">
            <div className="LogoAuth">
                <img src={authlogo} alt="" />
            </div>
            <div className="AuthSideText">
                <h3>Let's find your account</h3>
            </div>
        </div>
        <div className="FormArea">
            <div className="AlreadyForgots">
                <p>Already have an account? <span onClick={()=>navigate("/login")}>Login</span></p>
            </div>
            <div className="MainForgotForm">
                <div className="MainForgotFormTexts">
                    <h2>Enter your email address</h2>
                    <p>We'll send you an instruction to reset your password</p>
                </div>
                <div className="MainForgotFormInputAndButton">
                    <input type="email" placeholder='Email address' onChange={handleEmail}/>
                    <>
                        {
                            emailError ? <p style={{color:"red", paddingInline:"5px", fontFamily:"inherit"}}>{emailErrorMsg}</p>: null
                        }
                    </>
                    <div className="HoldButtonForgot">
                    <button onClick={forgotFunction}>{loading ? <BiLoaderCircle className="mr-2 animate-spin" size={25} />  : "Reset my password"}</button>
                    </div>
                </div>

            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default ForgotPassword