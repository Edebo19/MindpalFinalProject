import React, { useState } from 'react'
import Header from '../BeforeLogin/Header/Header'
import { Outlet } from 'react-router-dom'
import SecondHeader from '../BeforeLogin/Header/SecondHeader'

const TherapistLayout = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div>
        {
          isLoggedIn ? <SecondHeader/> : <Header/>
        }
        <Outlet/>
    </div>
  )
}

export default TherapistLayout