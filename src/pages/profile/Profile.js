import { Avatar, Form, Input } from 'antd';
import React from 'react';
import './profile.css';
import profile from '../../database/Pro';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='information'>
                <div className='avt'>
                    <Avatar size={150} src={profile[0].img} />
                    <h2>{profile[0].name}</h2>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Chức vụ</td>
                                <td>: {profile[0].position}</td>
                                <td>Ngày sinh</td>
                                <td>: {profile[0].birthday}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>: {profile[0].email}</td>
                                <td>SĐT</td>
                                <td>: {profile[0].phoneNumber}</td>
                            </tr>
                            <tr>
                                <td>Địa chỉ</td>
                                <td>: {profile[0].address}</td>
                                <td>Mã nhân viên</td>
                                <td>: {profile[0].id}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='contact-container'>
                        <div>
                            <a className='contact-icon icon-1' href='#'></a>
                            <a className='contact-icon icon-2' href='#'></a>
                            <a className='contact-icon icon-3' href='#'></a>
                        </div>
                    </div>
                </div>
            </div>
            <Form className='form-profile'>
                <Form.Item className='input-profile'>
                    <Input placeholder='Họ và tên' />
                </Form.Item>

                <Form.Item className='input-profile'>
                    <Input placeholder='Email' />
                </Form.Item>

                <Form.Item className='input-profile'>
                    <Input placeholder='Ngày sinh' />
                </Form.Item>

                <Form.Item className='input-profile'>
                    <Input placeholder='Số điện thoại' />
                </Form.Item>

                <Form.Item className='input-profile'>
                    <Input placeholder='Địa chỉ' />
                </Form.Item>

                <Form.Item className='btn-profile'>
                    <button>Sửa thông tin</button>
                    <button>Đổi mật khẩu</button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Profile
