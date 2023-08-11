import React, { useEffect, useState } from 'react'
import { AiFillLock, AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Register.css'
import { Form, Input } from 'antd'

const Register = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    await axios.post("http://localhost:4000/register", values);
    setSuccess(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    if (!success) return;
    setSuccess(false);
    navigate("/login");
  }, [success]);
  return (
    <div className='Register-form'>
      <div className='signIn'>
        <div className='top-heder'>
        <div className='loginform-title'>Đăng Kí</div>
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
                message: "Hãy điền Tên đăng nhập!",
              },
            ]}
          >
            <div className='input-field'>
              <AiOutlineUser
                size={30}
                color='#fff'
              />
              <Input type='text' className='input' placeholder='Tên đăng nhập' />
            </div>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy điền mật khẩu!",
              },
            ]}
          >
            <div className='input-field'>
              <AiFillLock
                size={30}
                color='#fff'
              />
              <Input type='password' className='input' placeholder='Mật khẩu' />
            </div>
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Hãy điền lại mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "Hai mật khẩu không trùng nhau! Hãy nhập lại"
                    )
                  );
                },
              }),
            ]}
          >
            <div className='input-field'>
              <AiFillLock
                size={30}
                color='#fff'
              />
              <Input type='password' className='input' placeholder='Nhập lại mật khẩu' />
            </div>
          </Form.Item>
          <div className='input-field'>
            <button className="submit" type="primary" htmlType="submit">Đăng kí</button>
          </div>
          <div className='login-register'>
            <p>Đẵ có tài khoản? </p>
            <a className='register-link' onClick={() => { navigate('/login') }}>Đăng nhập</a>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register