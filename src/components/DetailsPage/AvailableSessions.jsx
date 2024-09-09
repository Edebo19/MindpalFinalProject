import React from 'react'
import './AvailableSessions.css'

const AvailableSessions = () => {
  return (
    <div className='AvailableSessions'>
        <div className="AvailableSide">
            <div className="AvailableSideHeader">
                <h2>Available Sessions</h2>
                <p>Book 1:1 sessions from the options</p>
            </div>
            <div className="AvailableSideMain">
                <div className="ScheduledDate">
                    <div className="ScheduledDateUp">
                        <h5>Monday</h5>
                        <p>October 11</p>
                    </div>
                    <div className="ScheduledDateDown">
                        <button>9AM</button>
                        <button>11:45AM</button>
                    </div>
                </div>
                <div className="ScheduledDate">
                    <div className="ScheduledDateUp">
                        <h5>Wednesday</h5>
                        <p>October 13</p>
                    </div>
                    <div className="ScheduledDateDown">
                        <button>10AM</button>
                        <button>12PM</button>
                    </div>
                </div>
                <div className="ScheduledDate">
                    <div className="ScheduledDateUp">
                        <h5>Friday</h5>
                        <p>October 15</p>
                    </div>
                    <div className="ScheduledDateDown">
                        <button>9AM</button>
                        <button>12PM</button>
                    </div>
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
