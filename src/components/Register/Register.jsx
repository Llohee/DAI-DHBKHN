import React, { useEffect, useState } from 'react'
import { FiUser, FiMail } from 'react-icons/fi'
import { AiFillLock, AiOutlineClose } from 'react-icons/ai'
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
          <header>Registration</header>
        </div>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            // label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <div className='input-field'>
              <FiUser
                size={25}
                color='#fff'
              />
              <Input type='text' className='input' placeholder='Username' />
            </div>
          </Form.Item>
          {/* <Form.Item>
          <div className='input-field'>
            <FiMail
              size={25}
              color='#fff'
            />
            <input type='text' className='input' placeholder='Email' />
          </div>
          </Form.Item> */}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <div className='input-field'>
              <AiFillLock
                size={25}
                color='#fff'
              />
              <Input type='password' className='input' placeholder='Password' />
            </div>
          </Form.Item>
          <Form.Item
            // label="Confirm password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please retype your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <div className='input-field'>
              <AiFillLock
                size={25}
                color='#fff'
              />
              <Input type='password' className='input' placeholder='Confirm password' />
            </div>
          </Form.Item>
          <div className='input-field'>
            <button className="submit" type="primary" htmlType="submit">Register</button>
          </div>
          <div className='login-register'>
            <p>Already have an account? </p>
            <a className='register-link' onClick={() => { navigate('/login') }}> Login</a>
          </div>
        </Form>
        {/* <div className='bottom'>
          <div className='left'>
            <input type='checkbox' id='check' />
            <label for='check'>I agree to the terms & condition</label>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Register