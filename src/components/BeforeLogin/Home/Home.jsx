import React, { useEffect } from 'react'
import './Home.css'
import { FaQuoteLeft, FaQuoteRight, FaRegClock } from 'react-icons/fa'
import { LuMessageCircle } from 'react-icons/lu'
import { LiaBrainSolid } from 'react-icons/lia'
import first from '../../../assets/mrs.jpeg'
import firstman from '../../../assets/mr1.jpeg'
import second from '../../../assets/mrs2.jpeg'
import secondman from '../../../assets/mr2.jpeg'
import review1 from '../../../assets/review1.jpeg'
import review2 from '../../../assets/review2.jpeg'
import review3 from '../../../assets/review3.jpeg'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom'
import heroImage from '../../../assets/heroWoman.jpg'
import { useSelector } from 'react-redux'

const Home = () => {
  const navigate = useNavigate()
  const {isLoggedIn} = useSelector((state)=>state)
  useEffect(()=>{
    Aos.init();
  },[])
  
  const Qualities = [
    {
      Quality: "Simplicity",
      icon: <LiaBrainSolid  size={60}/>,
      TheAnimation: "fade-right",
      AboutQuality: "No complicated process or unnecessary barriers. Just simple effective mental health support."
    },
    {
      Quality: "Efficiency",
      icon: <FaRegClock size={60}/>,
      TheAnimation: "fade-right",
      AboutQuality: "Maximize your time, minimize wait. Get effective support when you need it."
    },
    {
      Quality: "Accessibility",
      icon: <LuMessageCircle  size={60}/>,
      TheAnimation: "fade-left",
      AboutQuality: "Get online therapy from anywhere with flexible scheduling."
    }
  ]
  const therapists = [
    {
      image: first,
      TherapistName: "Dr Joana Jacobs"
    },
    {
      image: firstman,
      TherapistName: "Dr Victor Shola"
    },
    {
      image: second,
      TherapistName: "Dr Veronica German"
    },
    {
      image: secondman,
      TherapistName: "Dr James Jeff"
    },
  ]
  const Reviews = [
    {
      image: review1,
      Review: "Expert care, empathetic listeners, and personalized guidance. Mindpal exceeded my expectations."
    },
    {
      image: review2,
      Review: "The most supportive and non-judgmental space I've ever encountered. Thank you, Mindpal!"
    },
    {
      image: review3,
      Review: "Thank you, Mindpal, for helping me find my voice and regain control over my life."
    }
  ]
  return (
    <div className='Home'>
      <div className="HomeHero">
        <div className="HeroImageText">
         <div className="HeroText">
         <h1>
          Let's build a <br/>  world of healthy minds.
          </h1>
          <p>Discover a journey to mental well-being with expert guidance, supportive communities, and personalized resources</p>
         </div>
          <div className="HeroButton">
            {
              isLoggedIn ?
              <button onClick={()=> navigate("/alltherapist")}>Book a session</button>
              :
          <button onClick={()=> navigate("/login")}>Book a session</button>
            }
          </div>
        </div>
          <div className="HeroImage">
            <img src={heroImage} alt="" />
          </div>
      </div>
      <div className="QualitiesWeOffer">
        {
          Qualities.flatMap((e)=>(
            <div className="QualityCard" data-aos={e.TheAnimation} 
            data-aos-easing="linear"
            data-aos-duration="900">
            <div className="iconBox">
              <div className="iconBoxCard">{e.icon}</div>
            </div>
            <div className="QualityTextBox">
              <div className="QualityHeader">
                <h5>{e.Quality}</h5>
              </div>
              <div className="QualityTextArea">
                <p>{e.AboutQuality}</p>
              </div>
            </div>
          </div>
          ))
        }
      </div>
      <div className="TherapistAccess">
        <div className="TherapistAccessPicture" 
          data-aos="fade-right" 
          data-aos-easing="linear"
          data-aos-duration="900"
        ></div>
        <div className="TherapistAccessWriteup"
          data-aos="fade-left" 
          data-aos-easing="linear"
          data-aos-duration="900">
         <div className='TherapistAccessMainWriteUp'>
         <h4>Access to licensed therapist</h4>
          <p>We ensure that users can communicate with
              their therapist securely and confidentially.
              <br /> Also,
              users can easily book and manage therapy
              sessions to receive professional
              mental health support.
          </p>
         </div>
         <div className="JoinUsButton">
          <button>Join us as a therapist</button>
         </div>

        </div>
      </div>
      <div className="ValuesinAction">
        <div className="ValuesHeader"><h3>Our Values in action</h3></div>
        <div className="ValuesWriteup">
          <p>"Experience a non judgmental, compassionate, and personalized mental health care, <br/> tailored to your unique  needs and goals."</p>
        </div>
      </div>
      <div className="MeetOurTherapists">
        <div className="Meet">
          <h4>OUR THERAPISTS</h4>
        </div>
        <div className="TherapistCircles">
          {
            therapists.map((e)=>(
              <div className="TherapistImagebox"  data-aos="fade-left" 
              data-aos-easing="linear"
              data-aos-duration="900">
            <div className="TherapistImage" onClick={()=>navigate("/therapistLayout/therapist-details")}>
              <img src={e.image} alt="" />
            </div>
            <div className="TherapistName" onClick={()=>navigate("/therapistLayout/therapist-details")}>
              <p>{e.TherapistName}</p>
            </div>
          </div>
            ))
          }
        </div>
      </div>
      <div className="YourConcerns">
        <div className="YourConcernsheader">
          <h2>Your concerns are our priority</h2>
        </div>
        <div className="YourConcernMain">
            <div className="YourComcernWriteUp"
              data-aos="fade-right" 
              data-aos-easing="linear"
              data-aos-duration="900"
            >
              <p>Mindpal is unwaveringly committed to creating and maintaining <br/>
                a secure,respectful, and inclusive space, where every individual feels

                safeguarded from judgment and criticism, respected for their boundaries and choices, supported throughout their journey.<br/><br/>

                We strive to create a safe and welcoming environment,  free from discrimination or bias, where everyone feels valued and supported <br/> <br/>
                Our expert team is committed to understanding your specific concerns, providing personalized guidance and support.


               </p>
            </div>
            <div className="YourConcernImage"
                data-aos="fade-left" 
                data-aos-easing="linear"
                data-aos-duration="900"
              ></div>
          </div>
      </div>
      <div className="OurClients">
            <div className="OurClientsHeader">
              <h3>What our clients are saying</h3>
            </div>
            <div className="OurClientsCardBox">
            {
              Reviews.map((e)=>(
                <div className="OurClientsCard" 
                 data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="700">
              <div className="clientImage">
                <div className="MainImage">
                  <img src={e.image} alt="" />
                </div>
              </div>
              <div className="clientReview">
              <div className="QuoteLeft">
              <FaQuoteLeft size={12} />
              </div>
              <p>{e.Review}</p>
              <div className="QuoteRight">
              <FaQuoteRight size={12} />
              </div>
              </div>
            </div>
              ))
            }
            </div>
          </div>
    </div>
  )
}

export default Home