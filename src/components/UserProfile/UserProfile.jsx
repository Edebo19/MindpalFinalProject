import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import { BiCamera } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import profile from '../../assets/userProfile.jpg'

const UserProfile = () => {
    const [edit, setedit] = useState(false)
    const { userDetails } = useSelector((state)=> state)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    // console.log(username.firstName, "sbdjhbgyu")
    useEffect(()=>{
        setFirstName(userDetails.firstName)
        setLastName(userDetails.lastName)
        setEmail(userDetails.email)
    },[])
  return (
    <div className='UserProfile'>
        <div className="UserProfileCard">
            <div className="UserProfileTop"></div>
            <div className="HoldCircle">
                <div className="ProfileCircle">
                    <img src={profile} alt="" />
                </div>
                {
                    edit ? <div className="Cameradiv">
                    <div className="round">
                        <BiCamera size={26} cursor="pointer"/>
                    </div>
                </div> : null
                }
            </div>
            <div className="HoldName">
                <h2>{firstName} {lastName}</h2>
                <p>{email}</p>
            </div>
            {
                edit ?
            <form>
                <div className="HoldInputs">
                    <div className="inputHolderr">
                        <p>Firstname</p>
                        <input type="text" placeholder='Enter firstname'/>
                    </div>
                    <div className="inputHolderr">
                        <p>Lastname</p>
                        <input type="text" placeholder='Enter lastname'/>
                    </div>
                    <div className="inputHolderr">
                        <p>Email</p>
                        <input type="email" placeholder='Enter email address'/>
                    </div>
        
                </div>
                <div className="formButton">
                    <button onClick={()=>setedit(false)}> Save Changes</button>
                </div>
            </form> :
                        <form>
                <div className="HoldInputs">
                <div className="inputHolderr">
                    <p>Firstname</p>
                    <input type="text" value={firstName} placeholder='Enter firstname'/>
                </div>
                <div className="inputHolderr">
                    <p>Lastname</p>
                    <input type="text" value={lastName} placeholder='Enter lastname'/>
                </div>
                <div className="inputHolderr">
                    <p>Email</p>
                    <input type="email" value={email} placeholder='Enter email address'/>
                </div>

                </div>
                <div className="formButton">
                <button onClick={()=>setedit(true)}> Edit Profile</button>
                </div>
                    </form>
            }
        </div>
    </div>
  )
}

export default UserProfile