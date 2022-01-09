import React from 'react';
import './events.css';
import events from '../../database/Evt';

function Events() {
    return (
        <div className='events-container'>
            <div className='events-header'>
                <span className='events-title'>
                    <h4>Sự kiện công ty</h4>
                </span>
            </div>
            <div className='events-content'>
                {events.map((item) => {
                    return (
                        <div key={item.id} className='events-item'>{item.title}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Events
