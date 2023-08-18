import React, { useEffect, useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [goLogout, setGoLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!goLogout) return;
    setGoLogout(false);
    navigate("/logout");
  }, [goLogout]);
  return (
    <div className="main">
      <div className='list'>
        <buton className='btnLogin-popup' onClick={() => { navigate('/home') }}><a href=''>Farm</a></buton>
        {/* <button className='btnLogin-popup'
          onClick={() => {navigate('/admin')}}
        >Admin</button> */}
        <button className='btnLogin-popup' onClick={() => setGoLogout(true)}><a href=''>Logout</a></button>
      </div>
    </div>
  )
}

export default Navbar