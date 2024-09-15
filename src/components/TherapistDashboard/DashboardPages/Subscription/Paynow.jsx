import React from 'react'
import './Paynow.css'

const Paynow = () => {
  return (
    <div className='Paynow'>
        <div className="MonthlyDiv">
            <h1>Monthly Plan</h1>
            <p>₦45,000/Month</p>
            <div className="UnlimitedAccess">
                <p>Get unlimited access to MindPal for 1 month</p>
            </div>
            <span>Cancel Anytime.</span>
        </div>
        <div className="PaynowButton">
            <button>Pay now</button>
        </div>
    </div>
  )
}

export default Paynow