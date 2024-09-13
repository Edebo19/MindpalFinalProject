import React from 'react'
import './TherapistDashboardLayout.css'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import DashboardMobileNav from './DashboardMobileNav'

const TherapistDashboardLayout = () => {
  return (
    <div className='TherapistDashboardLayout'>
        <SideBar/>
        <Outlet/>
        <DashboardMobileNav/>
    </div>
  )
}

export default TherapistDashboardLayout