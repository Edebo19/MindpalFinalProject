import React, { useState } from 'react'
import './AdminSideBar.css'
import logo from '../../../assets/mainmain.png';
import { BiHome, BiLogOut, BiWallet } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const AdminSidebar = () => {
  const navigate = useNavigate()
  const [pick, setpick] = useState(false)

  const Upcoming= ()=>{
    setpick(false)
    navigate("/admin/admin-dashboard/upcoming-appointments")
  }
  const Past= ()=>{
    setpick(false)
    navigate("/admin/admin-dashboard/past-appointments")
  }
  return (
    <div className='AdminSidebar'>
      <div className="SidebarHeader">
        <div className="SideBarLogoBox">
          <img src={logo} alt="Logo" /> 
        </div>
      </div>
      <div className="AdminSidebarNav">
        <nav>
          <ul>
            <NavLink to="/admin/admin-dashboard/home" className={({isActive})=>[isActive ? "NavActive": "NavNotActive"]}>
              <BiHome size={20} aria-label="Home" />
              Home
            </NavLink>
            <NavLink to="/admin/admin-dashboard/all-patients" className={({isActive})=> [isActive ? "NavActive":"NavNotActive"]}>
              <IoBriefcaseOutline size={20} aria-label="Appointments" />
               All Patients
            </NavLink>
            <div className='NavNotActive' onClick={()=>setpick(true)}>
              <IoBriefcaseOutline size={20} aria-label="Appointments" />
               All Appointments
            </div>
            <>
              {
                pick ?
            <div className='AppointmentHolder'>
              <p onClick={Past}> Past appointments</p>
              <hr />
              <p onClick={Upcoming}>Upcoming appointments</p>
            </div>: null
              }
            </>
          </ul>
        </nav>
        <footer>
          <ul>
            <li onClick={()=> navigate("/therapistlogin")}>
              <BiLogOut size={20} aria-label="Logout" />
              Logout
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default AdminSidebar