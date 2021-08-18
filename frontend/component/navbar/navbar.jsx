import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from '../search/search';

const Navbar = ({ currentUser , logout, ...otherProps }) => {
    // debugger
    const onAuthPage = otherProps.location.pathname !== '/login' && otherProps.location.pathname !== '/signup';
    // console.log(otherProps.location.pathname);
    const display = currentUser ? (
        <div className="navbar-right">
            <Link id="my-button" to="/events/create">Create Event</Link>
            <Link className="button" to="/users/:userId/events">Events</Link>
            {/* <Link className="button" to="/login">Tickets</Link> */}
            {/* <Link className="user-drop-down-button">{currentUser.email}</Link> */}
            <input className="logout-button" onClick={() => logout()} value="Logout" />
            <div className="search-bar-div">
                <input className="search-bar" type="text" placeholder='  Search...' />
            </div>
            <div className="greeting">
                {/* <p>Hello, {currentUser.first_name}</p> */}
                {/* <button className="logout-button" onClick={logout}>Log Out</button>  */}
            </div>
        </div>
    ) : (
        <div className="navbar-right-second">
            {/* <button className="home-button"><Link className="to-events" to="/events">Browse Events</Link></button> */}
            {/* <Link className="drop-down-button" to="">Organize</Link> */}
            {/* <Link className="drop-down-button" to="">Help</Link> */}
            {/* <Link className="button-to-login" to="/login">Create Event</Link> */}
            <Link className="button" to="/login">Sign In</Link>
            <Link className="button" to="/signup">Create Account</Link>
            <div className="search-bar-div">
                <input className="search-bar" type="text" placeholder='  Search...' />
            </div>
        </div>
    );
    const searchLogo = (<div><i class="fas fa-search"></i></div>)
    
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