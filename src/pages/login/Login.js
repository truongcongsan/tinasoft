import { Avatar, Button, Form, Input } from 'antd';
import React from 'react';
import './login.css';

function Login() {
    return (
        <div className='login-container'>
            <Form className='form-login'>
                <Form.Item style={{marginBottom: '40px'}}>                  
                    <Avatar size={150} src="/img/icon-login.png" />
                </Form.Item>

                <Form.Item className='form-login-input'>
                    <Input className='input-email' placeholder='Email'/>
                </Form.Item>

                <Form.Item style={{marginTop: '16px'}} className='form-login-input'>
                    <Input.Password className='input-password' placeholder='Mật khẩu'/>
                </Form.Item>

                <Form.Item>
                    <button className='btn-login'>
                        Đăng Nhập
                    </button>
                </Form.Item>

                <Form.Item>
                    <a className="login-form-forgot" href="#">
                        Bạn quên mật khẩu?
                    </a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
