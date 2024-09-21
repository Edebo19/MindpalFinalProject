import React, { useState } from 'react'
import './UserProfile.css'
import { BiCamera } from 'react-icons/bi'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const [edit, setedit] = useState(false)
    const firstname = "Chikwado"
    const lastname = "Ndubisi"
    const email = "kwado@gmail.com"
    const { userDetails } = useSelector((state)=> state)
    const username = userDetails
  return (
    <div className='UserProfile'>
        <div className="UserProfileCard">
            <div className="UserProfileTop"></div>
            <div className="HoldCircle">
                <div className="ProfileCircle"></div>
                {
                    edit ? <div className="Cameradiv">
                    <div className="round">
                        <BiCamera size={26} cursor="pointer"/>
                    </div>
                </div> : null
                }
            </div>
            <div className="HoldName">
                <h2></h2>
                <p>kwado@gmail.com</p>
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
                    <input type="text" value={firstname} placeholder='Enter firstname'/>
                </div>
                <div className="inputHolderr">
                    <p>Lastname</p>
                    <input type="text" value={lastname} placeholder='Enter lastname'/>
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