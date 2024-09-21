import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { IoClose } from 'react-icons/io5'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import 'animate.css'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineUser } from 'react-icons/ai'
import { logout } from '../../Global/slice'

const NavBar = ({setMobile}) => {
  const {isLoggedIn} = useSelector((state)=> state)
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
    const Navigate = useNavigate()
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
  const dispatch = useDispatch()

    const logoutFunction =()=>{
        dispatch(logout())
        Navigate("/login")
    }
const handleHome =()=>{
  setMobile(false)
  handleNav("/")
} 
const handleAbout =()=>{
  setMobile(false)
  handleNav("/about")
} 
const handleTeam =()=>{
  setMobile(false)
  handleNav("/team")
} 
const handleTherapist =()=>{
  setMobile(false)
  handleNav("/alltherapist")
} 
const handleContact =()=>{
  setMobile(false)
  handleNav("/contact")
} 
  return (
    <div className='NavBar'>
      <div className="CloseBar">
        <IoClose onClick={()=>setMobile(false)} cursor="pointer" size={34}/>
      </div>
      <div className="Barnav">
         <ul>
            <nav onClick={handleHome} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to="/">Home</nav>
            <nav onClick={handleAbout} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to="/about">About</nav>
            <nav onClick={handleContact} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to= "/contact">Contact</nav>
            <nav onClick={handleTeam} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to="/team">Team</nav>
            {
              isLoggedIn ? 
              <>
                <nav onClick={handleTherapist} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to="/alltherapist">Therapists</nav>
              <div className="Account" onClick={()=>Navigate("/therapistLayout/user-profile")}> <AiOutlineUser size={20} /> My Profile</div>
              </>
              : null
            }
          </ul>
          <div className="Buttons">
            {
              isLoggedIn ?
              <>
                <button onClick={logoutFunction} >Logout</button>
              </>
              :
              <>
                <button onClick={()=> Navigate("/signup")} className='transparent'>Sign Up</button>
                <button onClick={()=> Navigate("/login")}>Login</button>
              </>
            }
            
          </div>
      </div>
    </div>
  )
}

export default NavBar