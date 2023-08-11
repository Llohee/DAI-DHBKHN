import React, { useEffect, useState } from 'react'
import { AiFillLock,AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Form, Input } from 'antd'
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
  useEffect(() => {
    if (success && datauser.role[0] === 'admin') {
      navigate("/admin")
      setSuccess(false);
    } if (success && datauser.role[0] === 'user') {
      navigate("/")
      setSuccess(false);
    }
  }, [success, datauser])
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
        <div className='top-header'>
          <div className='loginform-title'>Đăng Nhập</div>
        </div>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          classname="form"
          color="#fff"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Hãy điền Tên đăng nhập!",
              }
            ]}
          >
            <div className='input-field'>
              <AiOutlineUser
                size={30}
                color='#fff'
              />
              <Input type='text'
                className='input'
                placeholder='Tên đăng nhập'
              />
            </div>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy điền mật khẩu!",
              }
            ]}
          >
            <div className='input-field'>
              <AiFillLock
                size={30}
                color='#fff'
              />
              <Input type='password'
                className='input'
                placeholder='Mật khẩu'
              />
            </div>
          </Form.Item>
          <div className='input-field'>
            <button value='Login' className='submit' type="primary" htmlType="submit" >Đăng nhập</button>
          </div>
          <div className='login-register'>
            <p>Đăng kí tài khoản?</p>
            <a href='#' className='register-link' onClick={() => { setGoRegister(true) }}> Đăng kí </a>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default Login