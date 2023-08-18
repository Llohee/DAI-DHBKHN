import React from 'react'
import { useNavigate } from 'react-router-dom';
import './dashboard.css'
import Adminnavbar from '../../adminnavbar/adminnavbar';

const DashboardSetting = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Adminnavbar />
      <div className="dashboard">
        <div className="sidebar">
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/setting');
          }}> Cài đặt chung</div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/users');
          }} >Danh sách người dùng</div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/searches');
          }} >Thống kê tìm kiếm</div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/model');
          }} >Quản lý mô hình nhận dạng</div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/managetree');
          }} >Quản lý cây</div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/managehive');
          }} >Quản lý tổ ong </div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/parts');
          }} >Danh sách bộ</div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/surface');
          }} >Danh sách họ </div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/family');
          }} >Danh sách chi </div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/genus');
          }} >Danh sách loài </div>
          <div className="title" onClick={() => {
            navigate('/admin/dashboard/plantparts');
          }} >Danh sách bộ phận cây </div>
        </div>
        <div className='content'>
          <div className='caidatchung'>
            <div className='noidung'>Cài đặt chung</div>
            <div className='setting'>Tiêu đề Website</div>
            <div className='form'>
              <input type='text' className='form-setting' placeholder='Phần mềm nhận dạng và truy suất thông tin các loại thực vật' />
            </div>
            <div className='setting'>Tiêu đề trên thanh công cụ</div>
            <div className='form'>
              <input type='text' className='form-setting' placeholder='Traiongvuive' />
            </div>
            <div className='setting'>Thay đổi Logo</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSetting