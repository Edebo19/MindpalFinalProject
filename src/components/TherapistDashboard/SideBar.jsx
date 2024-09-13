import React from 'react';
import './SideBar.css';
import logo from '../../assets/mainmain.png';
import { BiHome, BiLogOut, BiWallet } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const SideBar = () => {
    const navigate = useNavigate()
  return (
    <div className='SideBar'>
      <div className="SidebarHeader">
        <div className="SideBarLogoBox">
          <img src={logo} alt="Logo" /> {/* Add meaningful alt text */}
        </div>
      </div>
      <div className="TherapistSidebarNav">
        <nav>
          <ul>
            <li onClick={() => navigate("/user/therapist-dashboard/home")}>
              <BiHome size={20} aria-label="Home" />
              Home
            </li>
            <li onClick={() => navigate("/user/therapist-dashboard/appointments")}>
              <IoBriefcaseOutline size={20} aria-label="Appointments" />
              Appointments
            </li>
            <li>
              <BiWallet size={20} aria-label="Subscription" />
              Subscription
            </li>
            <li>
              <AiOutlineUser size={20} aria-label="Profile" />
              My Profile
            </li>
          </ul>
        </nav>
        <footer>
          <ul>
            <li>
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
