import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './admin.css'
import Adminnavbar from "./adminnavbar/adminnavbar";

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
  return (
    <div>
      <Adminnavbar />
      {/* <div className='table'>
        <Table dataSource={dataSource} columns={columns} />;
      </div> */}
    </div>

  )
};

export default User;
