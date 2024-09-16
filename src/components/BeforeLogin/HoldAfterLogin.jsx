import React from 'react'
import SecondHeader from './Header/SecondHeader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const HoldAfterLogin = () => {
  return (
    <div>
        <SecondHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HoldAfterLogin