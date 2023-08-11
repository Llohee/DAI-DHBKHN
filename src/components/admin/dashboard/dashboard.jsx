import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./dashboard.css"
import Adminnavbar from '../adminnavbar/adminnavbar';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Adminnavbar />
      <div className="sidebar">
        <div className="title" onClick={() => {
          navigate('/home/boards');
        }}> Cài đặt chung</div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Danh sách người dùng</div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Thống kê tìm kiếm</div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Quản lý mô hình nhận dạng</div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Quản lý cây</div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Quản lý tổ ong </div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Danh sách bộ</div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Danh sách họ </div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Danh sách chi </div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Danh sách loài </div>
        <div className="title" onClick={() => {
          navigate('/home/calendar');
        }} >Danh sách bộ phận cây </div>
      </div>
    </>
  )
}

export default Dashboard