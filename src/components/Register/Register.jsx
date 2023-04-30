import React from 'react'
import { FiUser, FiMail } from 'react-icons/fi'
import { AiFillLock, AiOutlineClose } from 'react-icons/ai'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className='Register-form'>
      <div className='signIn'>
        <div className='icon-close'>
          <AiOutlineClose 
          onClick ={ ()=> {
            navigate('/')
          }}
          />
        </div>
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
          <a className='register-link' onClick={() => { navigate('/login') }}> Login</a>
        </div>
      </div>
    </div>
  )
}

export default Register