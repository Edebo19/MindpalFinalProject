import React from 'react'
import './AdminLayout.css'
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='AdminLayout'>
        <AdminSidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout