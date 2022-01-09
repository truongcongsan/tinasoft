import React from 'react';
import './payroll.css';

function Payroll() {
    return (
        <div className='pay-container'>
            <div className='pay-header'>
                <span className='pay-title'>
                    <h4>Bảng lương</h4>
                </span>
            </div>
            <div className='pay-content'>
                <div className='pay-table'>
                    <div className='pay-table-header'>
                        <div>ID</div>
                        <div>Năm</div>
                        <div>Tháng</div>
                    </div>
                    <div className='pay-table-content'>
                        <div>1</div>
                        <div>2021</div>
                        <div>12</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payroll
