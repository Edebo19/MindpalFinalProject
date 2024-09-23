import React from 'react';
import './SideBar.css';
import logo from '../../assets/mainmain.png';
import { BiHome, BiLogOut, BiWallet } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const navigate = useNavigate()

  const {therapistDetails} = useSelector((state)=> state)

  const therapistId = therapistDetails._id

  return (
    <div className='SideBar'>
      <div className="SidebarHeader">
        <div className="SideBarLogoBox">
          <img src={logo} alt="Logo" /> 
        </div>
      </div>
      <div className="TherapistSidebarNav">
        <nav>
          <ul>
            <NavLink to={`/user/therapist-dashboard/${therapistId}/home`} className={({isActive})=>[isActive ? "NavActive": "NavNotActive"]}>
              <BiHome size={20} aria-label="Home" />
              Home
            </NavLink>
            <NavLink to={`/user/therapist-dashboard/${therapistId}/appointments`} className={({isActive})=> [isActive ? "NavActive":"NavNotActive"]}>
              <IoBriefcaseOutline size={20} aria-label="Appointments" />
              Appointments
            </NavLink>
            <NavLink to={`/user/therapist-dashboard/${therapistId}/subscription`} className={({isActive})=> [isActive ? "NavActive":"NavNotActive"]}>
              <BiWallet size={20} aria-label="Subscription" />
              Subscription
            </NavLink>
            <NavLink to={`/user/therapist-dashboard/${therapistId}/my-profile`} className={({isActive})=> [isActive? "NavActive": "NavNotActive"]}>
              <AiOutlineUser size={20} aria-label="Profile" />
              My Profile
            </NavLink>
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
  );
};

export default SideBar;
