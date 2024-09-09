import React from 'react'
import './Navbar.css'
import { IoClose } from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'
import 'animate.css'

const NavBar = ({setMobile}) => {
  const navigate = useNavigate()
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
          </ul>
          <div className="Buttons">
            <button onClick={()=> navigate("/signup")} className='transparent'>Sign Up</button>
            <button onClick={()=> navigate("/login")}>Login</button>
          </div>
      </div>
    </div>
  )
}

export default NavBar