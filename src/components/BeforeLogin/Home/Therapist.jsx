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
  const {token} = useSelector((state)=> state)
  const navigate = useNavigate()
  useEffect(()=>{
    Aos.init();
  },[])
  const getAllTherapists=()=>{
    const url = "https://mind-pal-8a5l.onrender.com/api/v1/therapist/all"
    const headers = {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json',
    };
    axios.get(url, {headers})
    .then((res)=>{
      console.log(res.data.data)
      setTherapists(res.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    getAllTherapists()
  },[token])
    // const therapists = [
    //     {
    //       image: first,
    //       TherapistName: "Dr Joana Jacobs"
    //     },
    //     {
    //       image: firstman,
    //       TherapistName: "Dr Victor Shola"
    //     },
    //     {
    //       image: second,
    //       TherapistName: "Dr Veronica German"
    //     },
    //     {
    //       image: secondman,
    //       TherapistName: "Dr James Jeff"
    //     },
    //     {
    //       image: first,
    //       TherapistName: "Dr Joana Jacobs"
    //     },
    //     {
    //       image: firstman,
    //       TherapistName: "Dr Victor Shola"
    //     },
    //     {
    //       image: second,
    //       TherapistName: "Dr Veronica German"
    //     },
    //     {
    //       image: secondman,
    //       TherapistName: "Dr James Jeff"
    //     },
    //     {
    //       image: first,
    //       TherapistName: "Dr Joana Jacobs"
    //     },
    //     {
    //       image: firstman,
    //       TherapistName: "Dr Victor Shola"
    //     },
    //     {
    //       image: second,
    //       TherapistName: "Dr Veronica German"
    //     },
    //     {
    //       image: secondman,
    //       TherapistName: "Dr James Jeff"
    //     },
    //   ]

  return (
    <div className='Therapist'>
        <div className="TherapistMainHeader">
        <h2>Our Therapists</h2>
        <p>Click on a therapist to know more about them and book a session.</p>
        </div>
        <div className="MainTherapistCircles">
          {
            therapists.map((e)=>(
              <div className="TherapistImagebox"  data-aos="fade-left" 
              data-aos-easing="linear"
              data-aos-duration="900">
            <div className="TherapistImage" onClick={()=>navigate(`/therapistLayout/therapist-details/${e._id}`)}>
              <img src="" alt="" />
            </div>
            <div className="TherapistName" onClick={()=>navigate(`/therapistLayout/therapist-details/${e._id}`)}>
              <p>Dr {e.firstName} {e.lastName}</p>
            </div>
          </div>
            ))
          }
        </div>
    </div>
  )
}

export default Therapist