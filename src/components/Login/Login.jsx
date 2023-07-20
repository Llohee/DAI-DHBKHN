import React, { useEffect, useState } from 'react'
import { AiFillLock } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {  Form, Input } from 'antd'
import './Login.css'

import axios from 'axios'

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [goRegister, setGoRegister] = useState(false);
  const [datauser, setDatauser] = useState({});
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { data } = await axios.post("http://localhost:4000/login", values);
    if (data.token) {
      localStorage.setItem("token", data.token);
      setDatauser(data.user)
      setSuccess(true)
    }
    console.log(data.token)
  };
  console.log(datauser)
  useEffect(()=> {
    if(success && datauser.role[0] === 'admin') {
      navigate("/admin")
      setSuccess(false);
    }if(success && datauser.role[0] === 'user'){
      navigate("/")
      setSuccess(false);
    }
  },[success, datauser])
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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