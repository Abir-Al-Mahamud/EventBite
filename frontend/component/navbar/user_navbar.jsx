import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.first_name}</p>
            <button onClick={logout}>Log Out</button>
            <Link className="button" to="/">Create Event</Link>
            <Link className="button" to="/">Likes</Link>
            <Link className="button" to="/login">Create Event</Link>
            <button className="user-drop-down-button">{currentUser.email}</button>
        </div>
    ) : (
        <div>
            <Link className="drop-down-button" to="">Organize</Link>
            <Link className="drop-down-button" to="">Help</Link>
            <Link className="button" to="/login">Create Event</Link>
            <Link className="button" to="/login">Sign In</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <Link className="logo-home" to="/">eventbrite</Link>
            <div>
                {display}
            </div>
        </header>
    )
}
