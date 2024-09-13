import React, { useState } from 'react'
import './App.css'
import Header from './components/BeforeLogin/Header/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast }  from 'react-toastify';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import BFLayout from './components/BeforeLogin/BeforeLoginLayout/BFLayout';
import Home from './components/BeforeLogin/Home/Home';
import About from './components/BeforeLogin/Home/About';
import Contact from './components/BeforeLogin/Home/Contact';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Team from './components/BeforeLogin/Home/Team';
import TherapistLayout from './components/DetailsPage/TherapistLayout';
import TherapistDetails from './components/DetailsPage/TherapistDetails';
import ForgotPassword from './components/Auth/ForgotPassword';
import ChangePassword from './components/Auth/ChangePassword';
import ResetPassword from './components/Auth/ResetPassword';
import Thesignup from './components/Auth/Thesignup';
import TherapistDashboardLayout from './components/TherapistDashboard/TherapistDashboardLayout';
import TherapistDashBoard from './components/TherapistDashboard/TherapistDashBoard';
import TherapistHome from './components/TherapistDashboard/DashboardPages/TherapistHome';
import TherapistAppointments from './components/TherapistDashboard/DashboardPages/TherapistAppointments';
import TherapistPatients from './components/TherapistDashboard/DashboardPages/TherapistPatients';

// https://blog.logrocket.com/using-react-toastify-style-toast-messages/




const App = () => {
  const [pick, setPick] = useState(1)
  const router = createHashRouter([
    {
      path: "/therapist",
      element:<TherapistLayout/>,
      children: [
        {
          path:"therapist-details",
          element: <TherapistDetails/>
        }
      ]
    },
    {
      path: "/",
      element:<BFLayout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "team",
          element: <Team/>
        }
      ]
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "signup",
      element: <Signup/>
    },
    {
      path: "forgot-password",
      element: <ForgotPassword/>
    },
    {
      path: "change-password",
      element: <ChangePassword/>
    },
    {
      path: "reset-password",
      element: <ResetPassword/>
    },
    {
      path: "therapist-signup",
      element: <Thesignup/>
    },
    {
      path: "user",
      element: <TherapistDashboardLayout/>,
      children: [
        {
          path: "therapist-dashboard",
          element: <TherapistDashBoard/>,
          children:[
            {
              path: "home",
              element: <TherapistHome/>
            },
            {
              path:"appointments",
              element: <TherapistAppointments/>
            },
            {
              path:"progress",
              element: <TherapistPatients/>
            }
          ]
        }
      ]
    }
  ])


  return (
    <div className='AppBody'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App