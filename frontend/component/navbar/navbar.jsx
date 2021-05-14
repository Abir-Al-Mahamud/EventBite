import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ user, logout }) => {
    const display = user ? (
        <div>
            <p>Hello, {user.first_name}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="button" to="/signup">Sign Up</Link>
            <Link className="button" to="/login">Login</Link>
        </div>
    );

    return(
        <header className="nav-header">
            <h1 className="logo">eventbite</h1>
            <div>
                {display}
            </div>
        </header>
    )
}

export default Nav;