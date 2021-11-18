import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { requestUserEvents } from '../../actions/events';
import Search from '../search/search';

const Navbar = ({ history, currentUser , logout, ...otherProps }) => {

    const onAuthPage = otherProps.location.pathname !== '/login' && otherProps.location.pathname !== '/signup';
    const display = currentUser ? (
        
        <div className="navbar-right"> 
            <Link id="my-button" to="/create">Create Event</Link>
            <Link className="button" to={`/users/${currentUser}/events`}>Events</Link>
            <button className="button" onClick={() => logout()}>Logout</button>
            {/* <div className="search-bar-div">
                <input className="search-bar" type="text" placeholder='  Search...' />
            </div> */}
 
        </div>
    ) : (
        <div className="navbar-right-second">
            <Link className="button" to="/login">Sign In</Link>
            <Link className="button" to="/signup">Create Account</Link>
            {/* <div className="search-bar-div">
                <input className="search-bar" type="text" placeholder='  Search...' />
            </div> */}
        </div>
    );
    const searchLogo = (<div><i className="fas fa-search"></i></div>)
    
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