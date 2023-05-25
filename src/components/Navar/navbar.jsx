import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className='list'>
        <buton className='cx' onClick={() => { navigate('/home') }}><a href=''>Home</a></buton>
        <buton className='cx'><a href=''>About</a></buton>
        <buton className='cx'><a href=''>Services</a></buton>
        <buton className='cx'><a href=''>Contact</a></buton>
        <button className='btnLogin-popup' onClick={() => { navigate('/login') }}><a href=''>Login</a></button>
      </div>
    </div>
  )
}

export default Navbar