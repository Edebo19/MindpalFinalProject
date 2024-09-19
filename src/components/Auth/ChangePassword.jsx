import React from 'react'
import authlogo from '../../assets/mainmain.png'
import './ForgotPassword.css'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
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
                <div className="AlreadyForgot">
                    <p>Already have an account? <span onClick={()=>navigate("/login")}>Login</span></p>
                </div>
                <div className="MainForgotForm">
                    <div className="MainForgotFormTextSuccess">
                        <h2>Please check your inbox</h2>
                        <p> We sent an email with password reset instructions.</p>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default ChangePassword