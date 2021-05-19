import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from '../search/search';

const Navbar = ({ currentUser , logout, ...otherProps }) => {
    // debugger
    const onAuthPage = otherProps.location.pathname !== '/login' && otherProps.location.pathname !== '/signup';
    // console.log(otherProps.location.pathname);
    const display = currentUser ? (
        <div>
            <button id="my-button">Create Event</button>
            <Link className="button" to="/">Likes</Link>
            <Link className="button" to="/login">Tickets</Link>
            <Link className="user-drop-down-button">{currentUser.email}</Link>
            <p>Hello, {currentUser.first_name}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="drop-down-button" to="">Organize</Link>
            <Link className="drop-down-button" to="">Help</Link>
            <Link className="button-to-login" to="/login">Create Event</Link>
            <Link className="button" to="/login">Sign In</Link>
        </div>
    );
    
    
    return(
        <div className="nav-bar-logo">
            <header className="nav-bar">
                <Link className="logo-home" to="/">eventbite</Link>
                <div>
                    {onAuthPage && display}
                </div>
            </header>

            
        </div>
    )
}

export default withRouter(Navbar);