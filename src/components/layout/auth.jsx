import React from 'react'
import { Outlet } from 'react-router-dom'
 const LayoutAuth = () => {
  return (
      <div className="container-layoutauth">
      <Outlet />
    </div>
  )
}
export default LayoutAuth