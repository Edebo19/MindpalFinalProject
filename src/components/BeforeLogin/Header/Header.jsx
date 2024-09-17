import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../../assets/mainmain.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import NavBar from '../../BeforeLogin/Header/NavBar'
import { MdManageAccounts } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Global/slice';

const Header = () => {
    const Navigate = useNavigate()
    const [mobile, setMobile] = useState(false)
    const {pathname} = useLocation()
    // console.log(pathname)

    const [isactive, setIsactive] = useState(false)
    const [home, setHome] = useState(false)
    const [about, setAbout] = useState(false)
    const [contact, setContact] = useState(false)
    const [therapist, setTherapist] = useState(false)
    const [team, setTeam] = useState(false)
    useEffect(()=>{
        if (pathname === "/"){
            setAbout(false)
            setHome(true)
            setContact(false)
            setTeam(false)
        }else  if (pathname === "/about"){
        setAbout(true)
        setHome(false)
        setContact(false)
        setTeam(false)
        setTherapist(false)
         }else  if (pathname === "/contact"){
            setAbout(false)
            setHome(false)
            setContact(true)
            setTeam(false)
            setTherapist(false)
         }else  if (pathname === "/therapist"){
            setAbout(false)
            setHome(false)
            setContact(false)
            setTeam(false)
            setTherapist(true)
         } else  if (pathname === "/team"){
            setAbout(false)
            setHome(false)
            setContact(false)
            setTherapist(false)
            setTeam(true)
        }
        
    },[pathname])
    const handleNav = (val)=>{
        if (val=="/"){
            Navigate("/")
            setIsactive(true)
        }else if (val=="/about"){
            Navigate("/about")
        }else if (val=="/contact"){
            Navigate("/contact")
        }else if (val=="/team"){
            Navigate("/about")

            setTimeout ( ()=>{
                const teamId = document.getElementById("team");
                if (teamId){
                    teamId.scrollIntoView({behavior: "smooth"});
                }
            }, 100);
        }
    } 
    const handleClick = () => {
        Navigate("/about")

        setTimeout ( ()=>{
            const teamId = document.getElementById("team");
            if (teamId){
                teamId.scrollIntoView({behavior: "smooth"});
            }
        }, 100);
    };
    const dispatch = useDispatch()



    return (
        <div className='Header'>
            <div className="HeaderWrapper">
                <div className="Logobox">
                    <img src={logo} alt="" />
                </div>
                <div className="NavAndAuth">
                    <nav className="mainNav">
                        <ul>
                            <nav style={{ textDecoration: "none" }} className={home ? "NavActive" : "NavNotActive"} onClick={()=>handleNav("/")}>Home</nav>
                            <nav style={{ textDecoration: "none" }} className={about ? "NavActive" : "NavNotActive"} onClick={()=>handleNav("/about")}>About</nav>
                            <nav style={{ textDecoration: "none" }} className={contact ? "NavActive" : "NavNotActive"} onClick={()=>handleNav("/contact")}>Contact</nav>
                            <nav style={{ textDecoration: "none" }} className={team ? "NavActive" : "NavNotActive"} onClick={()=>handleNav("/team")} >Team</nav>
                        </ul>
                    </nav>
                    <div className="Auth">
                    <button onClick={()=> Navigate("/login")} >Login</button>
                    <button onClick={()=> Navigate("/signup")}className='transparent'>Sign up</button>
                    
                </div>
                </div>
                <div className="menu" onClick={() => setMobile(true)}>
                    <AiOutlineMenu size={35} />
                </div>
            </div>
            {
                mobile ?
                    <div className="NavBarHolder">
                        <NavBar mobile={mobile} setMobile={setMobile} />
                    </div>
                    : null
            }
        </div>
    )
}

export default Header