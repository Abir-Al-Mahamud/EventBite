import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser , logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.first_name}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="button" to="/signup">Sign Up</Link>
            <Link className="button" to="/login">Login</Link>
        </div>
    );

    return(
        <header className="nav-bar">
            <Link className="logo-home" to="/">eventbrite</Link>
            <div>
                {display}
            </div>
        </header>
    )
}
