import React from 'react';
import './TherapistDashboard.css';
import TherapistHome from './DashboardPages/TherapistHome';
import TherapistAppointments from './DashboardPages/TherapistAppointments';
import { Outlet } from 'react-router-dom';

const TherapistDashBoard = ({ pick }) => {
  return (
    <div className='TherapistDashBoard'>
      <Outlet/>
    </div>
  );
};

export default TherapistDashBoard;
