import React from 'react'
import './SecondPage.css'


const SubSecondPage = () => {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1]
  return (
    <div className='SubSecondPage'>
        <div className="SecondPageHeader">
            <h2>Payment history</h2>
            <p>View all payment history below</p>
        </div>
        <div className="PaymentHistoryTableHolder">
        <table>
              <thead>
                <tr>
                  <th><h2>Date</h2></th>
                  <th><h2>Amount</h2></th>
                  <th><h2>Status</h2></th>
                </tr>
              </thead>
              {
                data.map((e)=>(
                  <tbody>
                <td><p>13/09/2024</p></td>
                <td><p>₦45,000</p></td>
                <td style={{display:"flex",border:"0.5px solid black", justifyContent:"center"}}><p className='PaymentStatusButton'>Paid</p></td>
              </tbody>
                ))
              }
            </table>
        </div>
    </div>
  )
}

export default SubSecondPage