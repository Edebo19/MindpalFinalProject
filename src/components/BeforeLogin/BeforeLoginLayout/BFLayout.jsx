import React, { useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import SecondHeader from '../Header/SecondHeader'
import { useSelector } from 'react-redux'

const BFLayout = () => {
  
  const isLoggedIn = useSelector((state)=>state.Mindpal.isLoggedIn)
  return (
    <div>
        {
          isLoggedIn ? <SecondHeader/> : <Header/>
        }
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default BFLayout