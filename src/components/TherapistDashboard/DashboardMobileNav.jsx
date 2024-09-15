import React from 'react'
import './DashboardMobileNav.css'
import { BiHome, BiWallet } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs'
import { IoBriefcaseOutline, IoLogOutOutline } from 'react-icons/io5'
import { CiSettings } from 'react-icons/ci'
import { AiOutlineUser } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const DashboardMobileNav = () => {
  return (
    <div className='DashboardMobileNav'>
        <nav>
                <ul>
                <NavLink to="/user/therapist-dashboard/home" className={({isActive})=>[isActive ? "MobileNavActive": "MobileNavNotActive"]}>
              <BiHome size={20} aria-label="Home" />
              Home
            </NavLink>
            <NavLink to="/user/therapist-dashboard/appointments" className={({isActive})=> [isActive ? "MobileNavActive":"MobileNavNotActive"]}>
              <IoBriefcaseOutline size={20} aria-label="Appointments" />
              Appointments
            </NavLink>
            <NavLink to="/user/therapist-dashboard/subscription" className={({isActive})=> [isActive ? "MobileNavActive":"MobileNavNotActive"]}>
              <BiWallet size={20} aria-label="Subscription" />
              Subscription
            </NavLink>
            <NavLink to="/user/therapist-dashboard/my-profile" className={({isActive})=> [isActive? "MobileNavActive": "MobileNavNotActive"]}>
              <AiOutlineUser size={20} aria-label="Profile" />
              My Profile
            </NavLink>
                </ul>
            </nav>
    </div>
  )
}

export default DashboardMobileNav