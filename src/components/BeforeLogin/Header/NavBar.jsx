import React from 'react'
import './Navbar.css'
import { IoClose } from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'
import 'animate.css'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineUser } from 'react-icons/ai'
import { logout } from '../../Global/slice'

const NavBar = ({setMobile}) => {
  const {isLoggedIn} = useSelector((state)=> state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

    const logoutFunction =()=>{
        dispatch(logout())
        navigate("/login")
    }

  return (
    <div className='NavBar'>
      <div className="CloseBar">
        <IoClose onClick={()=>setMobile(false)} cursor="pointer" size={34}/>
      </div>
      <div className="Barnav">
         <ul>
            <NavLink onClick={()=>setMobile(false)} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to="/">Home</NavLink>
            <NavLink onClick={()=>setMobile(false)} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to="/about">About</NavLink>
            <NavLink onClick={()=>setMobile(false)} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to= "/contact">Contact</NavLink>
            <NavLink onClick={()=>setMobile(false)} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to="/team">Team</NavLink>
            {
              isLoggedIn ? 
              <>
                <NavLink onClick={()=>setMobile(false)} style={{textDecoration: "none"}} className={({isActive})=> [isActive ? "NavActive": "NavNotActive"]} to="/alltherapist">Therapists</NavLink>
              <div className="Account" onClick={()=>navigate("/therapistLayout/user-profile")}> <AiOutlineUser size={24} /> My Profile</div>
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
                <button onClick={()=> navigate("/signup")} className='transparent'>Sign Up</button>
                <button onClick={()=> navigate("/login")}>Login</button>
              </>
            }
            
          </div>
      </div>
    </div>
  )
}

export default NavBar