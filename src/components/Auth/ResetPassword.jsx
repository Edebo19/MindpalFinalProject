import React, { useState } from 'react'
import './ResetPassword.css'
import authlogo from '../../assets/mainmain.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("")
    const token = useParams()
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("")
    const [passwordError, setPasswordError] = useState(false)


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
        setNewPassword(newPassword);
        validatePassword(newPassword);
      };

      const resetFunction = ()=>{
        const url = "https://mind-pal-8a5l.onrender.com/api/v1"
        const resetUrl = `${url}/user/reset-password/${token}`
        axios.post(resetUrl, {newPassword})
        .then((res)=>{
            console.log(res)
            Swal.fire({
              title: "Yay!",
              text: "Password resetting successful",
              icon: "success",
              customClass: {
                popup: 'my-popup-class',
                title: 'my-title-class',
                content: 'my-content-class',
                confirmButton: 'my-confirm-class',
              },
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/login");
              }
            });
        })
        .catch((error)=>{
            console.log(error)
        })
      }

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
                <form onSubmit={resetFunction} className="MainResetFormInputAndButton">
                    <div className="HoldInput">
                    <input type="password" onChange={handlePassword} placeholder='New password' />
                    <>
                    {
                        passwordError ? <p style={{color:"red", paddingInline:"5px", fontFamily:"inherit"}}>{passwordErrorMsg}</p>: null
                    }
                    </>
                    </div>
                    <div className="HoldButton">
                    <button type='submit'>Change password</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default ResetPassword