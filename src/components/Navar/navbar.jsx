import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className='list'>
        <div className='cx'><a href=''>Home</a></div>
        <div className='cx'><a href=''>About</a></div>
        <div className='cx'><a href=''>Services</a></div>
        <div className='cx'><a href=''>Contact</a></div>
        <button className='btnLogin-popup' onClick={() => { navigate('/login') }}><a href=''>Login</a></button>
      </div>
    </div>
  )
}

export default Navbar