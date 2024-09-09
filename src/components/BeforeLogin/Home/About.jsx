import React from 'react'
import "./About.css"
import abouthero from '../../../assets/abouthero.png'
import aboutmission from "../../../assets/aboutmission.png"
import aboutteam1 from "../../../assets/aboutteam1.png"
import aboutteam2 from "../../../assets/aboutteam2.png"
import aboutteam3 from "../../../assets/aboutteam3.png"
import aboutteam4 from "../../../assets/aboutteam4.png"
import brandImage from '../../../assets/Aboutone.jpg'
import valueImage from '../../../assets/valueImage.jpeg'

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
                MindPal is dedicated to connecting individuals with licensed therapists, fostering a supportive community that encourages growth, self-care, and resilience. We believe that every mind deserves the opportunity to shine, and we're committed to empowering individuals to take control of their mental wellness.
              </p>
              <p>
                Through our platform, we provide accessible, convenient, and stigma-free access to professional guidance, support, and resources. Our goal is to create a safe and inclusive space where individuals can navigate life's challenges with confidence, cultivate meaningful connections, and unlock their full potential.
              </p>
              <p>
                By harnessing the power of technology and human connection, we aim to break down barriers to mental health services and make wellness a reality for all.
              </p>
            </span>
          </div>
          <div className="aboutMissionImage"> <img src={aboutmission} alt="" srcset="" /> </div>
        </div>
        <div className="aboutValue">
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
          <div className="aboutValueImage">
            <img src={valueImage} alt="" />
          </div>
        </div>
        <h4 className="aboutTeam"  id="team">Meet our team</h4>
        <div className="aboutTeamImage">
          <div className="aboutTeamImageContainer"> <img src={aboutteam1} alt="" srcset="" /> </div>
          <div className="aboutTeamImageContainer"> <img src={aboutteam2} alt="" srcset="" /> </div>
          <div className="aboutTeamImageContainer"> <img src={aboutteam3} alt="" srcset="" /> </div>
          <div className="aboutTeamImageContainer"> <img src={aboutteam4} alt="" srcset="" /> </div>
          <div className="aboutTeamImageContainer"></div>
          <div className="aboutTeamImageContainer"></div>
        </div>

      </div>   
    </>
  )
}

export default About