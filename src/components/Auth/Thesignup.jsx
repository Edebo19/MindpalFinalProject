import React, { useState, useRef } from 'react';
import "./Thesignup.css";
import loginlogo from "../../assets/loginlogo.png";
import { IoEye, IoEyeOff } from "react-icons/io5"; 
import { MdOutlineImage } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
import { BiLoaderCircle } from "react-icons/bi";
import axios from 'axios';
import Swal from 'sweetalert2';

const Thesignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    specialty: '',
    experience: "",
    education: "",
    idCard: null,
    certificate: [],
    phone: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [emailErrorMsg, setEmailErrorMsg] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("")
  const [passwordError, setPasswordError] = useState(false)
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

    

  }
  const navigate = useNavigate();

  const idCardInputRef = useRef(null);
  const certificateInputRef = useRef(null);

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
    }else if(name === "email"){
      setFormData({...formData, value})
    if(formData.email.trim() === '') {
        toast.error('Email is required');
    }else if (!validateEmail(formData.email)) {
      setEmailError(true)
      setEmailErrorMsg('Invalid email format');
    } else {
      setEmailErrorMsg(null)
      setEmailError(false)
    }
    }
     else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  };

  // Remove selected file
  const removeFile = (fileType, fileName) => {
    if (fileType === 'idCard') {
      setFormData((prevData) => ({ ...prevData, idCard: null }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        certificate: prevData.certificate.filter(file => file.name !== fileName)
      }));
    }
  };


  const validateForm = () => {
    const { firstName, lastName, specialty, experience, education, idCard, certificate, phone, email, password } = formData;
    if (!firstName || !lastName || !specialty || !experience || !education || !phone || !email || !password || !idCard || !certificate.length) {
      toast.error("Please fill in all fields and upload necessary documents.");
      return false;
    }
    return true;
  };


  const handleSubmit = async () => {
    setLoading(true)
    if (!validateForm()) return;

    const formDataObj = new FormData();
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("lastName", formData.lastName);
    formDataObj.append("specialty", formData.specialty);
    formDataObj.append("experience", formData.experience);
    formDataObj.append("education", formData.education);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);
    formDataObj.append("idCard", formData.idCard);

    formData.certificate.forEach(file => formDataObj.append("certificate", file));

    const url =" https://mind-pal-8a5l.onrender.com/api/v1/therapist/sign-up"
    axios.post(url, formData)
    .then((res)=>{
      console.log(res)
      setLoading(false)
      
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })

  }
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
            nav(`/therapistlogin`);
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

  return (
    <>
      <ToastContainer />
      <div className="thesignup">
        <div className="thesignupLogoBox">
          <div className="thesignupLogo">
            <img src={loginlogo} alt="login logo" />
          </div>
          <h4>Create your account</h4>
        </div>

        <div className="thesignupInformation">
          <span className="thesignupWrtiteup">
            <p className="thesignupP" style={{ fontWeight: "bold" }}>Already have an account?</p>
            <p className="thesignuplogin" onClick={() => navigate("/therapistlogin")} style={{ color: "#3FB480", fontWeight: "bold" }}>Login</p>
          </span>

          <div className="thesignupBox">
            <p className="thesignupP1">Enter to get unlimited access to data & information</p>

            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
             <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder="Specialty" name="specialty" value={formData.specialty} onChange={handleChange} />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder="Experience in this field" name="experience" value={formData.experience} onChange={handleChange} />
            </div>
            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder="Level of education" name="education" value={formData.education} onChange={handleChange} />
            </div>

            {/* ID Card Upload */}
            <div className="thesignupInputBox">
              <input ref={idCardInputRef} className="thesignupInput" type="file" name="idCard" onChange={handleChange} style={{ display: 'none' }} />
              {formData.idCard ? (
                <div className="file-item">
                  {formData.idCard.name}
                  <span onClick={() => removeFile('idCard', formData.idCard.name)}>❌</span>
                </div>
              ) : (
                <>
                  <input className="thesignupInput" placeholder="Upload your ID card" readOnly onClick={() => idCardInputRef.current.click()} />
                  <div className="thesignupEye" onClick={() => idCardInputRef.current.click()}>
                    <MdOutlineImage />
                  </div>
                </>
              )}
            </div>

            {/* Document Upload */}
            <div className="thesignupInputBox">
              <input ref={certificateInputRef} className="thesignupInput" type="file" multiple name="certificate" onChange={handleChange} style={{ display: 'none' }} />
              {formData.certificate.length > 0 ? (
                <div className="file-list-horizontal">
                  {formData.certificate.map((file, index) => (
                    <div key={index} className="file-item">
                      {file.name}
                      <span onClick={() => removeFile('certificate', file.name)}>❌</span>
                    </div>
                  ))}
                  <div className="thesignupEye" onClick={() => certificateInputRef.current.click()}>
                    <AiOutlinePlusCircle />
                  </div>
                </div>
              ) : (
                <>
                  <input className="thesignupInput" placeholder="Upload your certificate(s)" readOnly onClick={() => certificateInputRef.current.click()} />
                  <div className="thesignupEye" onClick={() => certificateInputRef.current.click()}>
                    <MdOutlineImage />
                  </div>
                </>
              )}
            </div>

            <div className="thesignupInputBox">
              <input className="thesignupInput" placeholder="Phone number" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
        
            <div className="thesignupInputBox">
              <input
                className="thesignupInput"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="thesignupEye" onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <IoEyeOff /> : <IoEye />}
              </div>
            </div>

            <div className="thesignupbtn">
              <button className="thesignupButton" onClick={handleSubmit}>
                {loading ? <BiLoaderCircle className="mr-2 animate-spin" size={22} /> : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Thesignup;
