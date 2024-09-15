import React from 'react'
import './TherapistsAppointment.css'
import { BiSearch } from 'react-icons/bi'

const TherapistAppointments = () => {
  const data = [1, 2, 3, 4,1 , 1, 1, 1, 1 ,1, 1, 1, 1, 1,1 ]
  return (
    <div className='TherapistAppointments'>
      <div className="TherapistAppointmentHeader">
        <div className="HoldProfileName">
          <div className="PictureCircle">
            <img src="" alt="" />
          </div>
          <h2>Dr Nneoma Okafor</h2>
        </div>
        
      </div>
      <div className="AppointmentsArea">
        <div className="HoldSearchBar">
          <div className="SearchArea">
            <BiSearch size={20}/>
            <input type="text" placeholder='Search appointments' />
          </div>
        </div>
        <div className="AppointmentMainArea">
        <table>
              <thead>
                <tr>
                  <th><h2>Patient</h2></th>
                  <th><h2>Date</h2></th>
                  <th><h2>Time</h2></th>
                  <th><h2>Type</h2></th>
                  <th><h2>Status</h2></th>
                </tr>
              </thead>
              {
                data.map((e)=>(
                  <tbody>
                <td><p>Jane</p></td>
                <td><p>13/09/2024</p></td>
                <td><p>17:05</p></td>
                <td><p>Virtual</p></td>
                <td style={{display:"flex", justifyContent:"center"}}><p className='StatusButton'>Confirmed</p></td>
              </tbody>
                ))
              }
            </table>
        </div>
      </div>
    </div>
  )
}

export default TherapistAppointments