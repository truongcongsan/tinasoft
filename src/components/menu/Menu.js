import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div>
            Menu
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/payroll">payroll</Link>
                </li>
                <li>
                    <Link to="/leaveOfAbsenceLetter">leaveOfAbsenceLetter</Link>
                </li>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/events">events</Link>
                </li>
                <li>
                    <Link to="/birthdayparty">birthdayparty</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
