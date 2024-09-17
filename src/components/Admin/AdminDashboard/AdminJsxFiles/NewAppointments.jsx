import React from 'react'
import '../AdminCssFiles/AllAppointments.css'

const NewAppointments = () => {
    const users = [1,2,3,4,5,5,6,7,8,9,0]
    return (
      <div className='PastAppointments'>
        <div className="PastAppointmentHeader">
          <h2>Upcoming Appointments</h2>
        </div>
        <div className="HoldPastAppoinmentsTable">
        <table>
                <thead>
                  <tr>
                    <th><p>Date</p></th>
                    <th><p>Time</p></th>
                    <th><p>Patient</p></th>
                    <th><p>Therapist</p></th>
                    <th><p>Appointment type</p></th>
                  </tr>
                </thead>
                {
                  users.map((e)=>(
                    <tbody>
                  <tr>
                  <td><p>11-10-2024</p></td>
                  <td><p>10:30am</p></td>
                  <td><p>MaryAnn</p></td>
                  <td ><p>Dr Nneoma</p></td>
                  <td ><p>Virtual</p></td>
                  </tr>
                </tbody>
                  ))
                }
              </table>
        </div>
      </div>
    )
}

export default NewAppointments