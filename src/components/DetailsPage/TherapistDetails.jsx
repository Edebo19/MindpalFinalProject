import React, { useState } from 'react'
import './TherapistDetails.css'
import profile from '../../assets/mr2.jpeg'
import AvailableSessions from './AvailableSessions'
import { RiCloseLargeFill } from 'react-icons/ri'

const TherapistDetails = () => {
  const [bookSession, setBookSession] = useState(false)
  return (
    <div className='TherapistDetails'>
        <div className="TherapistHero"></div>
        <div className="TherapistNameAndPicture">
            <div className="TherapistPicture">
              <img src={profile} alt="" />
            </div>
            <div className="TherapistDetailsName">
                <h1>Dr Femi Adewale</h1>
                <h3>Doctor</h3>
            </div>
        </div>
        <div className="OverView">
          <div className="OverViewBox">
            <div className="OverViewBoxHeader">
              <h2>Overview</h2>
            </div>
            <div className="OverViewBoxMain">
              <p>Dr. Nneoma Okoro specializes in 
                treating survivors of relationship abuse, domestic violence, and trauma.
                Her expertise includes anxiety management, depression, and post-traumatic stress disorder (PTSD).
                With a warm and non-judgmental approach, Dr. Okoro creates a safe space for clients to heal and reclaim their lives.
              </p>
            </div>
          </div>
          <div className="BookArea">
            <div className="BookBox">
              <div className="Inperson">
                <div className="bookBoxText">
                  <h3>In person</h3>
                  <h3 style={{fontWeight: "400", fontSize:"14px"}}>₦30,000 per session</h3>
                </div>
                <div className="bookboxButton">
                  <button onClick={()=>setBookSession(true)}>Book</button>
                </div>
              </div>
              <div className="Virtual">
              <div className="bookBoxText">
                  <h3>In person</h3>
                  <h3 style={{fontWeight: "400", fontSize:"14px"}}>₦30,000 per session</h3>
                </div>
                <div className="bookboxButton">
                  <button onClick={()=>setBookSession(true)}>Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Experience">
          <div className="HoldExperience">
          <h2>Experience</h2>
          <p>
          10+ years of experience in treating relationship abuse,
           and depression Former Clinical Director at
           Lagos Mental Health Clinic Supervising Psychologist at University of Lagos Teaching Hospital.
          </p>
          </div>
        </div>
        <div className="Education">
        <div className="HoldEducation">
          <h2>Education</h2>
          <p>
          Bachelor's in Psychology (B.A./B.S.)
          Master Counseling (M.A./M.S.)
          </p>
          </div>
        </div>
        
            <>
              {
                bookSession ? 
                <div className="AvailableSessionsHolder">
              <div className="AvailableSessionCloseDiv">
              <RiCloseLargeFill onClick={()=> setBookSession(false)} cursor= "pointer" size={30} color='white' />
              </div>
             <AvailableSessions/>
            </div> : null
              }
            </>
    </div>
  )
}

export default TherapistDetails