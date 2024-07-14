import React from 'react';
import Buttons from '../Button';
import './Header.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const redirectToLogin = () => {
        window.location.href = '/login';
    };

    const authStatus = useSelector(state => state.auth.status);
    console.log(authStatus);

    const handlelogout = () => { }

    return (
        <div id="header" className="header">
            <div className="header-content">
                <h1>BOOKS</h1>

                {authStatus ? <Buttons name="Logout" onClick={handlelogout} /> : <Buttons name="Login" onClick={redirectToLogin} />}
            </div>
        </div>
    );
}
