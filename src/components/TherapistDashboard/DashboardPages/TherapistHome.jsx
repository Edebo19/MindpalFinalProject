import React from 'react'
import './TherapistHome.css'
import { useNavigate } from 'react-router-dom'


const TherapistHome = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/user/therapist-dashboard/subscription", { replace: true });
  };
  return (
    <div className='TherapistHome'>
      <div className="Welcome">
        <h2>Welcome, Dr Nneoma</h2>
      </div>
      <div className="HoldCardsInDashboard">
        <div className="DashboardCard">
          <h2>Total Patients</h2>
          <p>10</p>
        </div>
        <div className="DashboardCard">
        <h2>New Appointments</h2>
          <p>10</p>
        </div>
        <div className="DashboardCardBigger">
          <div className="Subscriptiondiv">
          <div className="Subscrptionstatus">
            <h2>Subscription status</h2>
            <p>(Monthly)</p>
          </div>
          <div className="remainingTimeForSubscription">
              <p>You are not yet subscribed for this month.
                </p>
            </div>
          </div>
          <div className="ManageButtonHolder">
            <button onClick={handleClick}>Manage</button>
          </div>
        </div>
      </div>
      <div className="UpcomingApointments">
        <div className="UpcomingHeader">
          <h2>Upcoming Appointments</h2>
        </div>
        <div className="UpcomingDatesHolder">
          <div className="UpcomingDates">
            <h3>Oct 13</h3>
          </div>
          <div className="UpcomingDates">
            <h3>Oct 17</h3>
          </div>
          <div className="UpcomingDates">
           <h3> Nov 9</h3>
          </div>
          <div className="UpcomingDates">
            <h3>Dec 23</h3>
          </div>
        </div>
        <div className="ScheduleList">
          <div className="ScheduleListHeader">
            <h2>Schedule List</h2>
          </div>
          <div className="ScheduleListTable">
            <table>
              <thead>
                <tr>
                  {/* <th>Appointments for</th> */}
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  {/* <td><p>Consultation</p></td> */}
                  <td><p>Jane</p></td>
                  <td><p>13/09/2024</p></td>
                  <td><p>17:05</p></td>
                  <td><p>Virtual</p></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TherapistHome