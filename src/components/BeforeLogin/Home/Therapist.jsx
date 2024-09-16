import React from 'react'
import './Therapist.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const Therapist = () => {
    const therapists = [
        {
          image: first,
          TherapistName: "Dr Joana Jacobs"
        },
        {
          image: firstman,
          TherapistName: "Dr Victor Shola"
        },
        {
          image: second,
          TherapistName: "Dr Veronica German"
        },
        {
          image: secondman,
          TherapistName: "Dr James Jeff"
        },
      ]

  return (
    <div className='Therapist'>
        <h2>Our Therapists</h2>
        <div className="MainTherapistCircles">
          {
            therapists.map((e)=>(
              <div className="TherapistImagebox"  data-aos="fade-left" 
              data-aos-easing="linear"
              data-aos-duration="900">
            <div className="TherapistImage" onClick={()=>navigate("/therapist/therapist-details")}>
              <img src={e.image} alt="" />
            </div>
            <div className="TherapistName" onClick={()=>navigate("/therapist/therapist-details")}>
              <p>{e.TherapistName}</p>
            </div>
          </div>
            ))
          }
        </div>
    </div>
  )
}

export default Therapist