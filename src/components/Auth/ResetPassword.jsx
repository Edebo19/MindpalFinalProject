import React from 'react'
import './ResetPassword.css'
import authlogo from '../../assets/mainmain.png'

const ResetPassword = () => {
  return (
    <div className='ForgotPasswordHolder'>
        <div className="AuthSide">
            <div className="LogoAuth">
                <img src={authlogo} alt="" />
            </div>
            <div className="AuthSideText">
                <h3>Enter a new password</h3>
            </div>
        </div>
        <div className="FormArea">
        <div className="AlreadyForgot">
            </div>
            <div className="MainForgotForm">
                <div className="MainForgotFormText">
                    <p>Enter your new password</p>
                </div>
                <div className="MainResetFormInputAndButton">
                    <div className="HoldInput">
                    <input type="password" placeholder='New password' />
                    </div>
                    <div className="HoldButton">
                    <button>Change password</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ResetPassword