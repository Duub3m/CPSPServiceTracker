import React from 'react'
import CPSP from './images/cpsp.png'

const Registration = () => {

  return (
    <div>

    <img class = "cpsp" src = {CPSP} alt = "CPSP Logo"/>
    <div>

      <div>
      <p>Personal Information</p>
      
      <label>First Name</label>
      <input type = "text"></input>
      <label>Last Name</label>
      <input type = "text"></input>
      <label>UAlbany ID(00#)</label>
      <input type = "text"></input>
      </div>

      <div>
      <p>Contact Information</p>

      <p>UAlbany Email</p>
      <input type = "email"></input>

      <p>Permanent Email</p>
      <input type = "email"></input>

      <p>Phone Number</p>
      <input type = "text"></input>
      </div>

      <div>
      <p>Student Information</p>

      <p>Academic Standing</p>
      <input type = "radio"></input>

      <p>Major</p>
      <input type = "text"></input>

      <p>Minor</p>
      <input type = "text"></input>


      </div>
    </div>

    </div>
    
  )
}

export default Registration