import React, { useEffect, useState } from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")
  const [message, setMessage] = useState("")
  const [enableButton, setEnableButton] = useState(false)

  const handlefullname = (e)=>{
    setFullname(e.target.value)
  }
  const handleEmail= (e)=>{
    setEmail(e.target.value)
  }
  const handleMessage = (e)=>{
    setMessage(e.target.value)
  }
  useEffect(() => {
    if (fullname !== '' && email !== '' && message !== '') {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [fullname, email, message]);

  const navigate = useNavigate()
  const ContactedSuccessfully = () => {
    Swal.fire({
      title: 'Nice one!',
      text: "Your feedback has been sent successfully!",
      icon: 'success',
      customClass: {
        popup: 'my-popup-class',
        title: 'my-title-class',
        content: 'my-content-class',
        confirmButton: 'my-confirm-class',
        cancelButton: 'my-cancel-class'
      },
      confirmButtonText: 'Okay',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/")
      }
    });
  };
  
  return (
    <div className='Contact'>
      <div className="PrimaryBox">
        <div className="ContactHeader">
          <h2>We would love to hear from you</h2>
          <p>Get in touch</p>
        </div>
        <div className="ContactBody">
          <div className="HoldContactInput">
            <input type="text" placeholder='Fullname' required={true} onChange={handlefullname} />
            <input type="email" placeholder='E-mail' required={true} onChange={handleEmail}/>
          </div>
          <div className="HoldContactTextArea">
            <textarea name="" id="" placeholder='Type a Message' required={true} onChange={handleMessage}>

            </textarea>
          </div>
          <div className="HoldContactButton">
            <button onClick={ContactedSuccessfully} disabled= {enableButton === false}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact