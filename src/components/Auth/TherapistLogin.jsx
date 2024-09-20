import React, { useState } from 'react'
import "./Login.css"
import loginlogo from "../../assets/loginlogo.png"
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { login } from '../Global/slice';
import { BiLoaderCircle } from 'react-icons/bi';
import Swal from 'sweetalert2';

const TherapistLogin = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === 'idCard') {
      setFormData({ ...formData, idCard: files[0] });
    } else if (name === 'certificate') {
      if (files.length + formData.certificate.length <= 3) {
        setFormData({ ...formData, certificate: [...formData.certificate, ...files] });
      } else {
        toast.error("You can only upload up to 3 files.");
      }
    } else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  };


  
  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return false;
    }
    return true;
  };



  const handleSubmit = async () => {
    setLoading(true)
    if (!validateForm()) return;

    const formDataObj = new FormData();
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);
    dispatch(login())
    const url = "https://mind-pal-8a5l.onrender.com/api/v1"
    const LoginUrl = `${url}/therapist/log-in`
    axios.post(LoginUrl, formData)
    .then((res)=>{
      console.log(res.data.data._id)
      setLoading(false)
      
      Swal.fire({
        title: "Welcome!",
        text: "Login Successful!",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/user/therapist-dashboard/${res.data.data._id}/home`)
        }
      });
    })
    .catch((error)=>{
      setLoading(false)

      console.log(error)
      toast.error("incorrrect email or password")
    })
  };
  // const loginUser =()=>{
  //   nav("/user/therapist-dashboard/home")
  // }
  return (
    <>
      <div className="login">
      
        <div className="loginLogoBox">
          <div className="loginLogo"> <img src={loginlogo} alt="" /> </div>
          <h4>Login</h4>
        </div>
        <div className="loginInformation">
          <span className="topWriteUp">
            <h1 className="h1">Welcome back!</h1>
            <p>Enter to get unlimited access to data & information</p>
          </span>
          <div className="loginInput">
            <div className="loginInputBox">  <input placeholder='Enter your E-mail address' name="email" value={formData.email} onChange={handleChange} /> </div>
            <div className="loginInputBox">
              <input
               type={passwordVisible ? "text" : "password"}
               placeholder='Password' 
               name="password"
               value={formData.password}
               onChange={handleChange}
               />
             <div className="loginEye"  onClick={() => setPasswordVisible(!passwordVisible)}> {passwordVisible ? <IoEyeOff /> : <IoEye />}</div>
            </div>
           
          </div>
          <p className="centerWriteUp" onClick={()=> navigate("/forgot-password")}>Forgot Password?</p>
          <button onClick={handleSubmit}> {loading ? <BiLoaderCircle className="mr-2 animate-spin" size={22} /> : "Login"}</button>
          <span className="bottomWriteUp">
            <p className="bottomWriteUp1">Don't have an account?</p>
            <p className="bottomWriteUp2" onClick={() => navigate("/signup")}>Sign up</p>
          </span>
        </div>

      </div>
      <ToastContainer/>
    </>
  )
}

export default TherapistLogin