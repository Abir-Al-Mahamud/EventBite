import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search'
// import Tabs from '../tabs';
// import AllEvents from '../tabs/all'
import EventIndex from '../events/event_index';
import EventIndexContainer from '../events/event_index_container';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        //Have the content key pointing to a react component
        // const tabs = [
        //     { name: 'All', content: 'Event1'},
        //     { name: 'For you', content: 'Event2' },
        //     { name: 'Religion', content: 'Event3' },
        //     { name: 'Online', content: 'Event4' },
        //     { name: 'Today', content: 'Event5' },
        //     { name: 'This weekend', content: 'Event6' },
        //     { name: 'Free', content: 'Event7' },
        //     { name: 'Charity & Causes', content: 'Event8' },
        //     { name: 'Free', content: 'Event9' }
        // ]
        // const EventComponent = EventIndex();

    return (
        <div className="home">
            {/* <Link >Facebook.com</Link> */}
                    {/* {Search} */}
            {/* <h1>eventbite</h1> */}
            <div className="float-container">
                <div className="float-child">
                    <h2 className="help">Help shape the</h2>
                    <h1 className="future-events">future of your events</h1>
                    <br />

                    <Link className="home-button" to="/events">Browse Events</Link>
  
                    
                </div>
            <div className="forest-image-main">
                    <img className="forest-image"src={window.signupImageSeven}/>
            </div>
            </div>
            
            <div className="event-display">
                <EventIndexContainer />
            </div>
            {/* <div className="interacting"> */}
                {/* <Tabs tabs={tabs}/> */}
            {/* </div> */}
           
        </div>
    )

    }
}


export default Home;