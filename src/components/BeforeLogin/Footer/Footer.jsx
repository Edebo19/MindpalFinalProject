import React from 'react'
import './Footer.css'
import logo from '../../../assets/mainmain.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
    const copyRightYear = new Date().getFullYear()
  return (
    <div className='Footer'>
        <div className="MainFooterThings">
        <div className="FooterLogoHolder">
            <div className="FooterImage">
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="AboutAndPrivacy">
            <div className="AboutSection">
                <h2>Company</h2>
                <h3>About</h3>
                <h3>Home</h3>
                <h3>Contact</h3>
                <h3>OurTeam</h3>
            </div>
            <div className="PrivacySection">
                <h2>Privacy</h2>
                <h3>Privacy Policy</h3>
                <h3>Terms and Condition</h3>
                <h3>FAQ</h3>   
            </div>
        </div>
        <div className="GetInTouch">
            <h3>Get in Touch</h3>
            <div className="SocialMediaHandles">
            <FaFacebook className='icon' size={30} color='#1f6c49' cursor="pointer"/>
            <GrInstagram className='icon' size={30} color='#1f6c49' cursor="pointer"/>
            <FaLinkedin className='icon' size={30} color='#1f6c49' cursor="pointer"/>
            </div>
        </div>
        </div>
        <div className="copyRight">
            <h5>Copyrights {copyRightYear} | MindPal, All Rights Reserved</h5>
        </div>
    </div>
  )
}

export default Footer