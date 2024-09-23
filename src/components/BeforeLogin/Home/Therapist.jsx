import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Therapist.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import first from '../../../assets/mrs.jpeg'
import firstman from '../../../assets/mr1.jpeg'
import second from '../../../assets/mrs2.jpeg'
import secondman from '../../../assets/mr2.jpeg'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Therapist = () => {

  const [therapists, setTherapists] = useState([])
  const [gettingTherapists, setGettingTherapists] = useState(false)
  const {token} = useSelector((state)=> state)
  const navigate = useNavigate()
  useEffect(()=>{
    Aos.init();
  },[])
  const getAllTherapists=()=>{
    setGettingTherapists(true)
    const url = "https://mind-pal-8a5l.onrender.com/api/v1/therapist/all"
    const headers = {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json',
    };
    axios.get(url, {headers})
    .then((res)=>{
      console.log(res.data.data)
      setGettingTherapists(false)
      setTherapists(res.data.data)
    })
    .catch((error)=>{
      setGettingTherapists(false)
      console.log(error)
    })
  }
  useEffect(()=>{
    getAllTherapists()
  },[token])


  return (
    <div className='Therapist'>
        <div className="TherapistMainHeader">
        <h2>Our Therapists</h2>
        <p>Click on a therapist to know more about them and book a session.</p>
        </div>
        {
          gettingTherapists ?
          <div style={{height: "20vh", width: "100%", display: "flex", justifyContent:"center", alignItems:"center"}} className="HoldGettingallTherapists">
           <p style={{fontSize:'20px', fontWeight: "500"}}>
           Getting Therapists. Please wait...
           </p>
          </div>
          :
          <div className="MainTherapistCircles">
          {
            therapists.map((e)=>(
              <div className="TherapistImagebox"  data-aos="fade-left" 
              data-aos-easing="linear"
              data-aos-duration="900">
            <div className="TherapistImage" onClick={()=>navigate(`/therapistLayout/therapist-details/${e._id}`)}>
              <img src={e.photo} alt="" />
            </div>
            <div className="TherapistName" onClick={()=>navigate(`/therapistLayout/therapist-details/${e._id}`)}>
              <p>Dr {e.firstName} {e.lastName}</p>
            </div>
          </div>
            ))
          }
        </div>
        }
    </div>
  )
}

export default Therapist