import React from 'react'
import { FiUser, FiMail } from 'react-icons/fi'
import { AiFillLock } from 'react-icons/ai'
import './Register.css'

const Register = () => {
  return (
    <div className='Register-form'>
      <div className='signIn'>
        <div className='top-heder'>
          <header>Registration</header>
        </div>
        <div className='input-field'>
          <FiUser
            size={25}
            color='#fff'
          />
          <input type='text' className='input' placeholder='Username' />
        </div>
        <div className='input-field'>
          <FiMail
            size={25}
            color='#fff'
          />
          <input type='text' className='input' placeholder='Email' />
        </div>
        <div className='input-field'>
          <AiFillLock
            size={25}
            color='#fff'
          />
          <input type='password' className='input' placeholder='Password' />
        </div>
        <div className='bottom'>
          <div className='left'>
            <input type='checkbox' id='check' />
            <label for='check'>I agree to the terms & condition</label>
          </div>
        </div>
        <div className='input-field'>
          <input type='submit' className='submit' value='Register' />
        </div>
        <div className='login-register'>
          <p>Already have an account? </p>
          <a href='#' className='login-link'> Login</a>
        </div>
      </div>
    </div>
  )
}

export default Register