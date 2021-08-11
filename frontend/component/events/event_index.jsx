import React from 'react';
import EventIndexCard from './event_index_card';
import { Link } from 'react-router-dom';


class EventIndex extends React.Component{
    constructor(props){
        super(props);

    }
 
    // componentWillMount(){
        // this.props.requestEvents();
        // const navBar = document.querySelector(".header");
        // navBar.classList.remove("white");
    // }

    componentDidMount(){
        this.props.requestEvents();
        // const navBar = document.querySelector(".header")
        // navBar.classList.add("white");
    }

    render(){
        // debugger
        console.log(this.props.events)
        if(!this.props.events) {
            return ( <h2>Loading...</h2> )
        } else { 
            
                return(
                    <div className="main-event">
                        <h1 className="events-near-you">Events Near You </h1>
                    {
                    this.props.events.map(event => (
                        <Link className="event-index-card" key={event.id} to={`/events/${event.id}`}>
                            <EventIndexCard className="event-index-card-comp" event={event}/>
                        </Link>
                    ))
                    }
                    
                    </div>
                )
        }
    }
}

export default EventIndex;