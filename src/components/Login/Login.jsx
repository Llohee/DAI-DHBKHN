import React, { useEffect, useState } from 'react'
import { AiFillLock, AiOutlineClose } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, Input } from 'antd'

const Login = () => {
  // const [usersuccess, setUsersuccess] = useState(false);
  const [success, setSuccess] = useState(false);
  const [goRegister, setGoRegister] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { data } = await axios.post("http://localhost:4000/login", values);
    if (data.token) {
      localStorage.setItem("token", data.token);
      setSuccess(true)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const { data } = await axios.get("http://localhost:4000/users", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     if (success && data.role === 'admin') {
  //       setSuccess(false) 
  //       navigate("/admin");
  //     }else{
  //       setSuccess(false)
  //       navigate("/");
  //     }
  //   }
  //   getUsers(); 
  // }, []);

  useEffect(() => {
    if (!success) return;
    setSuccess(false);
    navigate("/");
  }, [success]);


  useEffect(() => {
    if (!goRegister) return;
    setGoRegister(false);
    navigate("/register");
  }, [goRegister]);
  return (
    <div className='Login-form'>
      <div className='signUp'>
        <div className='top-heder'>
          <header>Login</header>
        </div>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            // label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              }
            ]}
          >
            <div className='input-field'>
              <FiMail
                size={25}
                color='#fff'
              />
              <Input type='text'
                className='input'
                placeholder='Username'
              />
            </div>
          </Form.Item>
          <Form.Item
            name="password"
            // label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              }
            ]}
          >
            <div className='input-field'>
              <AiFillLock
                size={25}
                color='#fff'
              />
              <Input type='password'
                className='input'
                placeholder='Password'
              />
            </div>
          </Form.Item>
          <div className='input-field'>
            <button value='Login' className='submit' type="primary" htmlType="submit" >Login </button>
          </div>
          <div className='login-register'>
            <p>Don't have an account? </p>
            <a href='#' className='register-link' onClick={() => { setGoRegister(true) }}> Register</a>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default Login