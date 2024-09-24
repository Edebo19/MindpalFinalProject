import React, { useState } from 'react'
import './TherapistProfile.css'
import { useSelector } from 'react-redux'

const TherapistProfile = () => {

  const CurrentPassword = 12345678
  const TherapistFirstName = "Nneoma"
  const TherapistLastName = "Okafor"
  const TherapistEmail = "nneomaokafor@gmail.com"

  const [edit, setEdit] = useState(false)
  const { therapistDetails } = useSelector((state)=> state)
  
  const therapist = therapistDetails
  console.log(therapist)

  return (
    <div className='TherapistProfile'>
      <div className="HoldProfileTherapist">
        <div className="TherapistProfileHeader">
          <h2>Profile</h2>
          <p>User Information</p>
        </div>
        <div className="holdtherapistProfileImage">
          <div className="ImageProfileImage">
            <img src={therapist.photo} alt="" />
          </div>
        </div>
        <>
          {
            edit ? 
            <form>
          <div className="InputHolder">
            <p>Firstname</p>
          <input type="text" placeholder='Enter Firstname'/>
          </div>
          <div className="InputHolder">
            <p>Lastname</p>
          <input type="text" placeholder='Enter Lastname'/>
          </div>
          <button onClick={()=> setEdit(false)}>Save changes</button>
        </form> :
          <div className='ProfileForm'>
          <div className="InputHolder">
            <p>Firstname</p>
          <div  className='input'>{therapist.firstName}</div>
          </div>
          <div className="InputHolder">
            <p>Lastname</p>
            <div  className='input'>{therapist.lastName}</div>
          </div>
          <div className="InputHolder">
            <p>Email</p>
          <div className='input'>{therapist.email}</div>
          </div>
          <button onClick={()=>setEdit(true)}>Edit Profile</button>
        </div>
          }
        </>
      </div>
      {/* <div className="HoldTherapistPassword">
      <div className="TherapistProfileHeader">
          <h2>Password</h2>
        </div>
        <form action="">
          <div className="InputHolder">
            <p>Current Password</p>
          <input style={{color: "black"}} type="password" value={CurrentPassword}/>
          </div>
          <div className="InputHolder">
            <p>New Password</p>
          <input type="password" placeholder='Enter New Password'/>
          </div>
          <div className="InputHolder">
            <p>Confirm New Password</p>
          <input type="password" placeholder='Confirm Password' />
          </div>
          <button >Save changes</button>
        </form>
      </div> */}
    </div>
  )
}

export default TherapistProfile