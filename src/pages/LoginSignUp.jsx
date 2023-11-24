import React from 'react'
import './css/loginsignup.css'
export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Email Adddress' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' />
        <p>By continuing, i agree to the terms of use & privacy.</p>
        </div>
      </div>
      </div>
  )
}
