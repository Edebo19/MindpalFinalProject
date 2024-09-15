import React, { useState } from 'react'
import './FirstPage.css'

const SubFirstPage = ({setPaynow}) => {

    const [subscription, setSubscription]= useState(true)
  return (
    <div className='SubFirstPage'>
        {
            subscription ?
        <div className="SubscribedCard">
            <div className="SubscrbedOnMindpal">
            <h2>Hello, Dr Nneoma</h2>
            <p>You are currently subscribed to Mindpal</p>
            </div>

            <div className="NextBilling">
                <h2>₦45,000/ Month</h2>
                <p>Your next subscription date is October 2, 2024</p>
            </div>
            <div className="HoldCancelButton">
                <button>Cancel Subscription</button>
            </div>
        </div> :

        <div className="UnsubscribedCard">
           <div className="UnsubscribedTextHolder">
           <h2>You are not yet subscribed to mindpal</h2>
            <p>To start accepting patient bookings, please complete your subscription. <br/> Once done, you'll be available for patients to book sessions.</p>
           </div>
            <div className="completeButtonHolder">
            <button onClick={()=>setPaynow(true)}>Complete Subscription</button>
            </div>
        </div>
        }
        <div className="SubscriptionPolicy">
            <h2>Policy</h2>
            <p>Please ensure that all sessions are carried out to ensure you get Payment for each session</p>
        </div>
    </div>
  )
}

export default SubFirstPage