import React, { useEffect, useState } from 'react'
import './TherapistDetails.css'
import profile from '../../assets/mr2.jpeg'
import AvailableSessions from './AvailableSessions'
import { RiCloseLargeFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const TherapistDetails = () => {
  const [bookSession, setBookSession] = useState(false)
  const {id}= useParams()
  const [therapistId, setTherapistId] = useState("")
  const [therapistinfo, setTherapistinfo] = useState("")
  const [total, setTotal] = useState(30000)
  // const item = therapist.find(item => item.id === parseInt(id));
  // console.log(item)
  console.log(therapistinfo)
  let {bookedTherapistId} = useSelector((state)=>state)
    bookedTherapistId = id
  // console.log(bookedTherapistId)
  const getOneTherapist =()=>{
    const url =`https://mind-pal-8a5l.onrender.com/api/v1/therapist/one/${id}`
    axios.get(url)
    .then((res)=>{
      // console.log(res.data.data)
      setTherapistinfo(res.data.data)
      setTherapistId(bookedTherapistId)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    getOneTherapist()
  },[])
  return (
    <div className='TherapistDetails'>
        <div className="TherapistHero"></div>
        <div className="TherapistNameAndPicture">
            <div className="TherapistPicture">
              <img src={therapistinfo.photo} alt="" />
            </div>
            <div className="TherapistDetailsName">
                <h1>Dr {therapistinfo.firstName} {therapistinfo.lastName}</h1>
            </div>
        </div>
        <div className="OverView">
          <div className="OverViewBox">
            <div className="OverViewBoxHeader">
              <h2>Overview</h2>
            </div>
            <div className="OverViewBoxMain">
              <p>Dr. {therapistinfo.firstName} {therapistinfo.lastName} specializes in 
                treating survivors of relationship abuse, domestic violence, and trauma.
                His expertise includes {therapistinfo.specialty} and post-traumatic stress disorder (PTSD).
                With a warm and non-judgmental approach, Dr. {therapistinfo.lastName} creates a safe space for clients to heal and reclaim their lives.
              </p>
            </div>
          </div>
          <div className="BookArea">
            <div className="BookBox">
              <div className="Inperson">
                <div className="bookBoxText">
                  <h3>Virtual</h3>
                  <h3 style={{fontWeight: "400", fontSize:"18px"}}>₦{total} per session</h3>
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
             <AvailableSessions setBookSession={setBookSession} total={total} therapistId={therapistId} setTherapistId={setTherapistId} therapistinfo={therapistinfo}/>
            </div> : null
              }
            </>
    </div>
  )
}

export default TherapistDetails