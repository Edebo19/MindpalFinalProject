import React, { useState } from 'react';
import './TherapistSubscription.css';
import SubFirstPage from './Subscription/SubFirstPage';
import SubSecondPage from './Subscription/SubSecondPage';
import Paynow from './Subscription/Paynow';
import { AiOutlineClose } from "react-icons/ai";

const TherapistSubscription = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [paynow, setPaynow] = useState(false);


  return (
    <div className='TherapistSubscription'>
      <div className="SubscriptionHeader">
        <h2>Subscription</h2>
        <div className="HoldSubscriptionButton">
          <button
            onClick={() => setIsFirstPage(true)}
            className={isFirstPage ? 'ButtonActive' : 'ButtonNotActive'}
          >
            Manage Subscription
          </button>
          <button
            onClick={() => setIsFirstPage(false)}
            className={!isFirstPage ? 'ButtonActive' : 'ButtonNotActive'}
          >
            Payment History
          </button>
        </div>
      </div>
      <div className="HoldSubscriptionPages">
      {isFirstPage ? <SubFirstPage setPaynow = {setPaynow}/> : <SubSecondPage />}
      </div>
      {
        paynow ? 
        <div className="SubscribeNow">
          <div className="HoldCloseButton">
          <AiOutlineClose onClick={()=>setPaynow(false)} cursor="pointer" size={30} />
          </div>
        <Paynow/>
      </div> : null
      }
    </div>
  );
}

export default TherapistSubscription;
