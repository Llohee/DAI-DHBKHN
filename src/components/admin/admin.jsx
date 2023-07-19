import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './admin.css'

const User = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const [goLogout, setGoLogout] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get("http://localhost:4000/users/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setDataSource(data);
    };
    getUsers();
  }, []);

  useEffect(() => {
    if (!goLogout) return;
    setGoLogout(false);
    navigate("/logout");
  }, [goLogout]);

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
    },
  ];
  return 
  <>
    <div className='adminnavbar'>
      <div className='right'>
        <button className='navbar' onClick={()=> {
          navigate('/')
        }}>Giới Thiệu</button>
        <button className='navbar'>Danh Mục</button>
        <button className='navbar'>Người Dùng</button>
        <button className='navbar'>Liên hệ</button>
      </div>
      <div className="left">
        <input type='search' />
        <button className="navbar" onClick={() => setGoLogout(true)}>Đăng Xuất</button>
      </div>
    </div>

    {/* <div className='table'>
      <Table dataSource={dataSource} columns={columns} />;
    </div> */}
  </>
};

export default User;
