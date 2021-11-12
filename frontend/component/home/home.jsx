import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search'
// import Tabs from '../tabs';
// import AllEvents from '../tabs/all'
import Footer from '../footer/footer'
import EventIndex from '../events/event_index';
import EventIndexContainer from '../events/event_index_container';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    scrollDown() {
        window.scrollTo({
            top: 630,
            behavior: 'smooth'
        })
    }

    render(){

    return (
        <div className="home">
            
            <div className="float-container">
                <div className="float-child">
                    <h2 className="help">Help shape the</h2>
                    <h1 className="future-events">future of your events</h1>
                    <br />

                    <button className="home-button" onClick={this.scrollDown}>Browse Events</button>
  
                    
                </div>
            <div className="forest-image-main">
                    <img className="forest-image"src={window.signupImageSeven}/>
            </div>
            </div>
            
            <div className="event-display">
                <EventIndexContainer />
            </div>
          
        </div>
    )

    }
}


export default Home;