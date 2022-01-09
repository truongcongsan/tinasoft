import { Avatar, Col, Row } from 'antd';
import React from 'react';
import './birthday.css';
import profile from '../../database/Pro';

function BirthdayParty() {
    return (
        <div className='birthday-container'>
            <div className='birthday-header'>
                <span className='birthday-title'>
                    <h4>Tiệc sinh nhật</h4>
                </span>
            </div>
            <Row style={{marginTop: '20px'}}>
                {profile.map((item, index) => {
                    return (
                        <Col span={8} key={index}>
                            <div className='birthday-card'>
                                <Avatar size={100} src={item.img} />
                                <h3 style={{marginTop: '20px'}}>{item.name}</h3>
                                <h3>{item.birthday}</h3>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default BirthdayParty
