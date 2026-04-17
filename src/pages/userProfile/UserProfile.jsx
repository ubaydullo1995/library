import './userProfile.css'
import { Button } from '../wallet/Wallet.styles'
import React, { useState } from 'react'

const UserProfile = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const enterClick = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div>
      <h1>User Profile</h1>
      <form>
        <label> Email:
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="text" 
            placeholder="Enter your email"
          />
        </label>

        <label> Password:
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            placeholder="Password"
          />
        </label>
        <Button className="formButton" onClick={enterClick}>Submit</Button>
      </form>
    </div>
  )
}

export default UserProfile