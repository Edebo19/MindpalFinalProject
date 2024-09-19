import React, { useState } from 'react'
import './AvailableSessions.css'
import { useParams } from 'react-router-dom'

const AvailableSessions = () => {
    const [time, setTime]= useState("")
    const [date, setDate]= useState("")
    const check = new Date().getHours().toLocaleString()
    // const time = new Date().toTimeString()
    console.log(time)

    const SendDate =(e)=>{
        setDate(e.target.value)
    }
    const SendTime =(e)=>{
        setTime(e.target.value)
    }
    console.log(time)
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
                    <p>Dr Nneoma Okafor</p>
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
            <button>Continue</button>
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
