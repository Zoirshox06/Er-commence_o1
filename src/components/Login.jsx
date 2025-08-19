import React from 'react'
import magizine from '../assets/magizne.png'

function Login() {
  return (
    <div className="signup-container">
    <div className="signup-left">
      <img src={magizine} alt="" />
    </div>

    <div className="signup-right">
      <h1>Log in to Exclusivet</h1>
      <p className="subtitle">Enter your details below</p>

      <form className="signup-form">
        <input type="text" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />

        <button className="create-btn">Log in</button>


      </form>

    </div>
  </div>
  )
}

export default Login