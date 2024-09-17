import React from 'react'
import { Outlet } from 'react-router-dom'
import '../AdminCssFiles/AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className='AdminDashboard'>
      <Outlet/>
    </div>
  )
}

export default AdminDashboard