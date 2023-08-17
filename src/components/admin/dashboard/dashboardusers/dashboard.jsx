import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../dasboardsetting/dashboard.css'
import Adminnavbar from '../../adminnavbar/adminnavbar';
import { Space, Table } from 'antd';
import axios from 'axios';

const DashboardUsers = () => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get("http://localhost:4000/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (data) setDataSource(data);
    };

    getUsers();
  }, []);
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Roles",
      dataIndex: "role",
      key: "roles",
      render: (data) => {
        return JSON.stringify(data);
      },
    },{
      title: "Delete",
      render: (data) => (
        <Space size="middle">
          <a>Change role {data.username}</a>
          <a>Delete</a>
        </Space>
      ),
    }
  ];
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
          <Table dataSource={dataSource} columns={columns} className="table"/>
        </div>
      </div>
    </div>
  )
}

export default DashboardUsers