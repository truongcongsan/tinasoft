import React from 'react'
import './home.css'
import { Tabs, Row, Col } from 'antd';
import Payroll from '../payroll/Payroll';
import LeaveOfAbsenceLetter from '../leaveOfAbsenceLetter/LeaveOfAbsenceLetter';
import Profile from '../profile/Profile';
import Events from '../events/Events';
import BirthdayParty from '../birthdayParty/BirthdayParty';
import { TableOutlined, FileTextOutlined, SolutionOutlined, CalendarOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import profile from '../../database/Pro';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;
function Home() {
    return (
        <>
            <Row>
                <Col className='box-logo'>
                    <img className='logo' src='/img/logo-big.png'></img>
                </Col>
                <Col className='box-avt'>
                    <Avatar size={50} src={profile[0].img} />
                    <button className='btn-logout'><Link style={{color: '#a15959'}} to="/login">LOGOUT</Link></button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<span className='tab-title'><TableOutlined />Bảng lương</span>} key="1">
                            <Payroll />
                        </TabPane>
                        <TabPane tab={<span className='tab-title'><FileTextOutlined />Đơn xin nghỉ phép</span>} key="2">
                            <LeaveOfAbsenceLetter />
                        </TabPane>
                        <TabPane tab={<span className='tab-title'><SolutionOutlined />Hồ sơ</span>} key="3">
                            <Profile />
                        </TabPane>
                        <TabPane tab={<span className='tab-title'><CalendarOutlined />Sự kiện công ty</span>} key="4">
                            <Events />
                        </TabPane>
                        <TabPane tab={<span className='tab-title'><i className="fas fa-birthday-cake"></i>Tiệc sinh nhật</span>} key="5">
                            <BirthdayParty />
                        </TabPane>
                    </Tabs>
                </Col>

            </Row>
        </>
    )
}

export default Home
