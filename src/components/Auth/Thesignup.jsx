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

const Thesignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    specialty: '',
    idCard: null,
    certificate: [],
    phone: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 
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
    } else {
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

  // Form validation function
  const validateForm = () => {
    const { firstName, lastName, specialty, idCard, certificate, phone, email, password } = formData;
    if (!firstName || !lastName || !specialty || !phone || !email || !password || !idCard || !certificate.length) {
      toast.error("Please fill in all fields and upload necessary documents.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) return;

    const formDataObj = new FormData();
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("lastName", formData.lastName);
    formDataObj.append("specialty", formData.specialty);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);
    formDataObj.append("idCard", formData.idCard);

    formData.certificate.forEach(file => formDataObj.append("certificate", file));

    try {
      setLoading(true);
      // const response = await axios.post("", formDataObj, {
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // });
      toast.success("Signup successful!");
      setLoading(false);
      setTimeout(() => {
        navigate("/therapistlogin");
      }, 3000); 
    } catch (error) {
      toast.error("An error occurred.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

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
            <p className="thesignuplogin" onClick={() => navigate("/copy")} style={{ color: "#3FB480", fontWeight: "bold" }}>Login</p>
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
                  <input className="thesignupInput" placeholder="Upload your document" readOnly onClick={() => certificateInputRef.current.click()} />
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

export default Thesignup;