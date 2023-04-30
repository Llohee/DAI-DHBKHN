import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="main">
      <div className='list'>
        <div className='cx'><a href=''>Home</a></div>
        <div className='cx'><a href=''>About</a></div>
        <div className='cx'><a href=''>Services</a></div>
        <div className='cx'><a href=''>Contact</a></div>
        <button className='btnLogin-popup' ><a href=''>Login</a></button>
      </div>
    </div>
  )
}

export default Navbar