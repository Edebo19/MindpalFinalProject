import React from 'react'
import './DashboardMobileNav.css'
import { BiHome, BiWallet } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs'
import { IoBriefcaseOutline, IoLogOutOutline } from 'react-icons/io5'
import { CiSettings } from 'react-icons/ci'
import { AiOutlineUser } from 'react-icons/ai'

const DashboardMobileNav = () => {
  return (
    <div className='DashboardMobileNav'>
        <nav>
                <ul>
                    <li> <BiHome size={20}/> Home</li>
                    <li> <IoBriefcaseOutline size={20}/> Appointments</li>
                    <li> <BiWallet size={20}/> Subscription</li>
                    <li> <AiOutlineUser size={20}/> Settings</li>
                </ul>
            </nav>
    </div>
  )
}

export default DashboardMobileNav