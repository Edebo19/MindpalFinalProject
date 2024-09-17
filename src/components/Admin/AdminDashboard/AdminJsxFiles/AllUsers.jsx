import React from 'react'
import '../AdminCssFiles/AllUsers.css'

const AllUsers = () => {
  const users = [1,2,3,4,5,5,6,7,8,9,0,12,3,4,5,6,7]
  return (
    <div className='AllUsers'>
      <div className="AllUsersHeader">
       <h2>
       All Patients
       </h2>
      </div>
      <div className="AllUsersTableHolder">
      <table>
              <thead>
                <tr>
                  <th><p>First Name</p></th>
                  <th><p>Last Name</p></th>
                  <th><p>Email Address</p></th>
                </tr>
              </thead>
              {
                users.map((e)=>(
                  <tbody>
                <tr>
                <td><p>MaryAnn</p></td>
                <td ><p>Archibong</p></td>
                <td ><p>AnnArchi@gmail.com</p></td>
                </tr>
              </tbody>
                ))
              }
            </table>
      </div>
    </div>
  )
}

export default AllUsers