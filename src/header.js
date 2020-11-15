import { NavLink } from "react-router-dom";
import React from 'react';

export default function Header({ isLoggedin, loginMsg }) {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            {isLoggedin && (
                <React.Fragment>
                    <li><NavLink activeClassName="active" to="/jokes">Jokes</NavLink></li>
                    <li><NavLink activeClassName="active" to="/user-settings">Admin </NavLink></li>
                    <li><NavLink activeClassName="active" to="/new-function">New function </NavLink></li>
                    <li><NavLink activeClassName="active" to="/user-info">User info </NavLink></li>
                </React.Fragment>
            )}
            <li><NavLink activeClassName="active" to="/login-out"> {loginMsg}  </NavLink></li>


        </ul>
    );
}