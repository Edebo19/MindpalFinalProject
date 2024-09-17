import React from 'react'
import '../AdminCssFiles/AdminHome.css'
import first from '../../../../assets/mrs.jpeg'
import firstman from '../../../../assets/mr1.jpeg'
import second from '../../../../assets/mrs2.jpeg'
import secondman from '../../../../assets/mr2.jpeg'

const AdminHome = () => {

  const therapists = [
    {
      image: first,
      TherapistName: "Dr Joana Jacobs"
    },
    {
      image: firstman,
      TherapistName: "Dr Victor Oshola"
    },
    {
      image: second,
      TherapistName: "Dr Presh German"
    },
    {
      image: secondman,
      TherapistName: "Dr James Jeffrey"
    },
  ]

  return (
    <div className='AdminHome'>
      <div className="Welcome">
        <h2>Welcome, Admin</h2>
      </div>
      <div className="HoldCardsInDashboard">
        <div className="DashboardCard">
          <h2>Total Therapists</h2>
          <p>10</p>
        </div>
        <div className="DashboardCard">
        <h2>Total Appointments</h2>
          <p>10</p>
        </div>
        <div className="DashboardCard">
        <h2>Total Patients</h2>
          <p>10</p>
        </div>
      </div>
      <div className="AllTherapistHolder">
        <div className="AllTherapistHeader">
          <h3>All Therapists</h3>
        </div>
        <div className="AllTherapistTableHolder">
        <table>
              <thead>
                <tr>
                  <th><p>Therapists</p></th>
                  <th><p>Appointments</p></th>
                  <th><p>Subscription Status</p></th>
                  <th><p>Option</p></th>
                </tr>
              </thead>
              {
                therapists.map((e)=>(
                  <tbody>
                <tr>
                <td style={{paddingLeft:"10px", paddingRight: "30px"}}>
                <div className="table-cell-flex">
                <div className="TherapistImageAdmin">
                  <img src={e.image} alt="" />
                </div>
                <p>{e.TherapistName}</p>
                </div>
                </td>
                <td style={{textAlign:"center", fontWeight:"800"}}><p>3</p></td>
                <td ><p>Active</p></td>
                <td ><button>Delete</button></td>
                </tr>
              </tbody>
                ))
              }
            </table>
        </div>
      </div>
    </div>
  )
}

export default AdminHome