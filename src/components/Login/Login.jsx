import React from 'react'
import { AiFillLock, AiOutlineClose } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='Login-form'>
      <div className='signUp'>
        <div className='icon-close'>
          <AiOutlineClose
            onClick={() => {
              navigate('/')
            }}
          />
        </div>
        <div className='top-heder'>
          {/* <span>Have an accoount?</span> */}
          <header>Login</header>
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
            <label for='check'>Remember Me</label>
          </div>
          <div className='right'>
            <label><a href='#'>Forgot Password</a></label>
          </div>
        </div>
        <div className='input-field'>
          <input type='submit' className='submit' value='Login' />
        </div>

        <div className='login-register'>
          <p>Don't have an account? </p>
          <a href='#' className='register-link' onClick={() => { navigate('/register') }}> Register</a>
        </div>
      </div>
    </div>
  )
}

export default Login