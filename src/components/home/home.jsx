import React from 'react'
import './home.css'

const Home = () => {
  return (
  <div className='header'>
    <div  className='main'>
      <h2 className='logo'>Farmhouse</h2>
    </div>
    <div className='center'>
        <div className='title'>Trại Ong Vui Vẻ</div>
        <button>
          <div className='btn'>Flower</div>
          <div className='btn'>Map</div>
        </button>
      </div>
  </div>  
  )
}

export default Home