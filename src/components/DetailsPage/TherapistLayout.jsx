import React from 'react'
import Header from '../BeforeLogin/Header/Header'
import { Outlet } from 'react-router-dom'

const TherapistLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default TherapistLayout