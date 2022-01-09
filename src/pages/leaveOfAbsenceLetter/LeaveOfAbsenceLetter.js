import React from 'react';
import './loal.css';
import { Tabs } from 'antd';
import loal from '../../database/Loal';

const { TabPane } = Tabs;

function LeaveOfAbsenceLetter() {
    const LoalTable = (compare) => {
        return (
            <div className='loal-table'>

                <div className='loal-table-title'>
                    <div>Thời gian</div>
                    <div>Lí do</div>
                    <div>Trạng thái</div>
                </div>

                {loal.filter(item => item.status === compare).map((item, index) => {
                    return (
                        <div className='loal-table-content' key={index}>
                            <div>{item.time}</div>
                            <div>{item.reason}</div>
                            <div>{item.status}</div>
                        </div>
                    )
                })}

                <div className='loal-total'>
                    <div>Tổng</div>
                    <div></div>
                </div>

            </div>
        )
    }
    return (
        <div className='loal-container'>
            <div className='loal-header'>
                <span className='loal-title'>
                    <h4>Đơn xin nghỉ phép</h4>
                </span>
                <img className='loal-plus' src='/img/plus.png' />
            </div>
            <Tabs className='loal-main' defaultActiveKey="1">
                <TabPane tab={<span>Đang đợi duyệt</span>} key="1">
                    {LoalTable('Đang đợi duyệt')}
                </TabPane>
                <TabPane tab={<span>Đã chấp nhận</span>} key="2">
                    {LoalTable('Đã chấp nhận')}
                </TabPane>
                <TabPane tab={<span>Không chấp nhận</span>} key="3">
                    {LoalTable('Không chấp nhận')}
                </TabPane>
            </Tabs>
        </div>
    )
}

export default LeaveOfAbsenceLetter
