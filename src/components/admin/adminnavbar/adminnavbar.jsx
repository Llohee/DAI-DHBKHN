import React, { useEffect, useState } from 'react'
import "./adminnavbar.css"
import { useNavigate } from 'react-router-dom';
const Adminnavbar = () => {
  const navigate = useNavigate();
  const [goLogout, setGoLogout] = useState(false);
  useEffect(() => {
    if (!goLogout) return;
    setGoLogout(false);
    navigate("/logout");
  }, [goLogout]);
  return (
    <div className='adminnavbar'>
      <div className='right'>
        <button className='navbar' onClick={() => {
          navigate('/')
        }}>Giới Thiệu</button>
        <button className='navbar' onClick={() => {
          navigate('/admin/list')
        }} >Danh Mục</button>
        <button className='navbar' onClick={() => {
          navigate('/admin/user')
        }}>Người Dùng</button>
        <button className='navbar' onClick={() => {
          navigate('/admin/dashboard/setting')
        }}>Bảng Điều Khiển</button>
      </div>
      <div className="left">
        <div className="search">
          <input type='search' classname="search" />
          <button>Tìm Kiếm</button>
        </div>
        <button className="logout" onClick={() => setGoLogout(true)}>Đăng Xuất</button>
      </div>
    </div>
  )
}

export default Adminnavbar