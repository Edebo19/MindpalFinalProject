import React, { useEffect, useState } from 'react'
import './Contact.css'

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
            <button disabled= {enableButton === false}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact