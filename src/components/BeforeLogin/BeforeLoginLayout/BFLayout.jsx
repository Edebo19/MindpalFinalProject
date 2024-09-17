import React, { useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import SecondHeader from '../Header/SecondHeader'

const BFLayout = ({isLoggedIn, setIsLoggedIn}) => {
  
  
  return (
    <div>
        {
          isLoggedIn ? <SecondHeader setIsLoggedIn={setIsLoggedIn}/> : <Header/>
        }
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default BFLayout