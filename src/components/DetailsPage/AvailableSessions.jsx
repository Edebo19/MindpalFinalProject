import React, { useState } from 'react'
import './AvailableSessions.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const        AvailableSessions = ({therapistinfo, setTherapistId, therapistId}) => {
    const [time, setTime]= useState("")
    const [date, setDate]= useState("")
    const SendTherapistId = therapistId
    console.log(SendTherapistId)
    const navigate = useNavigate()
    

    const {userDetails} = useSelector((state)=> state)
    const deets = userDetails._id 



    const SendDate =(e)=>{
        setDate(e.target.value)
    }
    const SendTime =(e)=>{
        setTime(e.target.value)
    }

    const bookAppointment =()=>{
        if (!SendTherapistId || !date || !time) {
            toast.error("Please pick a date and time")
        } else {    

            Swal.fire({
                title: 'That is great',
                text:"You have taken the first step to mental health Care! Your session has successfully been booked.",
                icon: 'success',
                customClass: {
                  popup: 'my-popup-class',          // Custom class for the popup
                  title: 'my-title-class',          // Custom class for the title
                  content: 'my-content-class',      // Custom class for the content
                  confirmButton: 'my-confirm-class', // Custom class for the confirm button
                  cancelButton: 'my-cancel-class'   // Custom class for the cancel button
                },
              }).then((result) => {
                if (result.isConfirmed) {
                  nav(`/`);
                }
              });
            // const url =`https://mind-pal-8a5l.onrender.com/api/v1/appointments/book/${deets}`
            // const data ={SendTherapistId, date, time}
            // console.log(data)
            // axios.post(url, data)
            // .then((res)=>{
            //     console.log(res)
            //     toast.success("session Successfully booked!")
            //     navigate("/login")
            // })
            // .catch((error)=>{
            //     console.log(error)
            // })
        }   

    }

  return (
    <div className='AvailableSessions'>
        <div className="AvailableSide">
            <div className="AvailableSideHeader">
                <h2>Available Sessions</h2>
                <p>Book 1:1 sessions from the options</p>
            </div>
            <div className="AvailableSideMain">
                <div className="HoldSelectedAppointmentTherapist">
                    <p style={{fontWeight:"600", fontSize:"18px"}}>Selected Therapist:</p>
                <div className='TherapistNameAppointment'>
                    <p>Dr {therapistinfo.firstName} {therapistinfo.lastName}</p>
                </div>
                </div>
                <div className="HoldAppointmentDate">
                    <p>Pick Convenient Date:</p>
                    <input type="date" value={date} onChange={SendDate} />
                </div>
                <div className="HoldAppointmentsTime">
                    <p>Pick Convenient Time:</p>
                    <input type="time" value={time} onChange={SendTime}  />
                </div>
            </div>
        </div>
        <div className="Continue">
            <button onClick={bookAppointment}>Continue</button>
        </div>
    </div>
  )
}

export default AvailableSessions

// import React, { useState } from 'react';
// import './AvailableSessions.css';

// const AvailableSessions = ({ sessions }) => {
//   const [selectedSession, setSelectedSession] = useState(null);

//   const handleButtonClick = (session) => {
//     setSelectedSession(session);
//   };

//   return (
//     <div className='AvailableSessions'>
//         <div className="AvailableSide">
//             <div className="AvailableSideHeader">
//                 <h2>Available Sessions</h2>
//                 <p>Book 1:1 sessions from the options</p>
//             </div>
//             <div className="AvailableSideMain">
//                 {sessions.map((session, index) => (
//                   <div key={index} className="ScheduledDate">
//                       <div className="ScheduledDateUp">
//                           <h5>{session.day}</h5>
//                           <p>{session.date}</p>
//                       </div>
//                       <div className="ScheduledDateDown">
//                           {session.times.map((time, timeIndex) => (
//                             <button 
//                               key={timeIndex}
//                               onClick={() => handleButtonClick({ day: session.day, date: session.date, time })}
//                             >
//                               {time}
//                             </button>
//                           ))}
//                       </div>
//                   </div>
//                 ))}
//             </div>
//         </div>
//         <div className="Continue">
//             <button onClick={() => alert(`Selected session: ${selectedSession ? `${selectedSession.day}, ${selectedSession.date} at ${selectedSession.time}` : 'None'}`)}>
//               Continue
//             </button>
//         </div>
//     </div>
//   );
// };

// export default AvailableSessions;
