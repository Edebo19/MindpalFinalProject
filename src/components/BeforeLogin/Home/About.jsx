import React from 'react'
import "./About.css"
import abouthero from '../../../assets/abouthero.png'
import aboutmission from "../../../assets/aboutmission.jpg"
import aboutteam1 from "../../../assets/aboutteam1.png"
import aboutteam2 from "../../../assets/aboutteam2.png"
import aboutteam3 from "../../../assets/aboutteam3.png"
import aboutteam4 from "../../../assets/aboutteam4.png"
import brandImage from '../../../assets/brandImage.jpg'
import valueImage from '../../../assets/vaImage.jpg'

const About = () => {
  return (
    <>
      <div className="aboutContainer">

        <div className="aboutHero"> <img src={abouthero} alt="" srcset="" /> </div>
        <div className="aboutBrand">
          <div className="aboutBrandImage">
            <img src={brandImage} alt="" />
          </div>
          <div className="aboutBrandText">
            <h4>Our Brand</h4>
            <p>
              At MindPal, we belive that mental wellness is the foundation of a fulfilling life. We're passionate about creating a supportive community where individuals can connect, grow, and thrive. Our goal is to provide a safe and inclusive space for people to prioritize their mental health, foster meaningful connections and cultivate resilience.
            </p>
            <p>
              With MindPal, you're not alone. Join our community today and start your journey towards a happier,<br/> healthier<br/>
              you.
            </p>
          </div>
        </div>
        <div className="aboutMission">
          <div className="aboutMissionText">
            <h4>Our Mission</h4>
            <span>
              <p>
                MindPal is dedicated to connecting individuals with licensed therapists, empowering them to take control of their mental wellness. We believe that every mind deserves the opportunity to shine.
              </p>
            </span>
          </div>
          <div className="aboutMissionImage"> <img src={aboutmission} alt="" srcset="" /> </div>
        </div>
        <div className="aboutValue">
          <div className="aboutValueImage">
            <img src={valueImage} alt="" />
          </div>
          <div className="aboutValueText">
            <h4>Our Value</h4>
            <span>
              <p>
                - Compassion: we care deeply about the well-being of our community.
              </p>
              <p>
                - Authenticity: we're genuine, transparent, and true to our word.
              </p>
              <p>
                - Inclusivity: we embrace diversity and welcome all individuals.
              </p>
              <p>
                - Empowerment: we believe in the strength and resilience of our community.
              </p>
            </span>
          </div>
        </div>
        <h4 className="aboutTeam"  id="team">Meet our team</h4>
        <div className="aboutTeamImage">
          <div className="aboutTeamImageContainer"> <img src={aboutteam1} alt="" srcset="" /> <p className="aboutT" style={{display: "flex", justifyContent:"center"}}><span>Dorcas</span> <span>Adejoh</span></p></div>
          <div className="aboutTeamImageContainer"> <img src={aboutteam2} alt="" srcset="" /> <p className="aboutT" style={{display: "flex", justifyContent:"center"}}><span>Peace</span> <span>Okelemu</span></p> </div>
          <div className="aboutTeamImageContainer"> <img src={aboutteam3} alt="" srcset="" /> <p className="aboutT" style={{display: "flex", justifyContent:"center"}}><span>Chidera</span> <span>Nwosu</span></p> </div>
          <div className="aboutTeamImageContainer"> <img src={aboutteam4} alt="" srcset="" /> <p className="aboutT" style={{display: "flex", justifyContent:"center"}}><span>Isaac</span> <span>Odamene</span> </p> </div>
        </div>

      </div>   
    </>
  )
}

export default About