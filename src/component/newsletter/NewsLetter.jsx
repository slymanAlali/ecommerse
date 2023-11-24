import React from 'react'
import './newsletter.css'
function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='new-letters-btn'> 
            <input type='email' placeholder='Your Email id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
