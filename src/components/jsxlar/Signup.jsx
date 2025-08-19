import React from 'react';
import '../../style/Signup.css'
import magizine from  '../../assets/magizne.png'

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={magizine} alt="" />
      </div>

      <div className="signup-right">
        <h1>Create an account</h1>
        <p className="subtitle">Enter your details below</p>

        <form className="signup-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />

          <button className="create-btn">Create Account</button>

          <button className="google-btn">
            <img src="/images/google-icon.png" alt="Google" />
            Sign up with Google
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
