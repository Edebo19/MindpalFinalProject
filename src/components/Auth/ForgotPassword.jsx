import React from 'react'
import './ForgotPassword.css'
import authlogo from '../../assets/mainmain.png'

const ForgotPassword = () => {
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
                <p>Already have an account? <span>Login</span></p>
            </div>
            <div className="MainForgotForm">
                <div className="MainForgotFormText">
                    <h2>Enter your email address</h2>
                    <p>We'll send you an instruction to reset your password</p>
                </div>
                <div className="MainForgotFormInputAndButton">
                    <input type="email" placeholder='Email address' />
                    <div className="HoldButton">
                    <button>Reset my password</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ForgotPassword