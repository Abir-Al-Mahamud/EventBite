import React from 'react';
import EventIndexCard from './event_index_card';
import { Link, withRouter } from 'react-router-dom';


class EventIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liked: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const { event } = this.props;
        this.props.history.push(`/events/${event.id}`)
    }


    componentDidMount(){
        this.props.requestEvents();
    }

    render(){

        if(!this.props.events) {
            return ( <h2>Loading...</h2> )
        } else { 
            
            return(
                <div className="event-index">
                    <h2>Events in <span className="blue">New York</span></h2>
                    <ul className="event-index-list">
                        {this.props.events.map((event, idx) => (
                            <Link className="event-index-links" key={event.id} to={`/events/${event.id}`}>
                                <EventIndexCard
                                    className="event-index-card-comp"
                                    event={event}
                                    // currentUserId={currentUserId}
                                    key={idx}
                                />
                            </Link>
                        ))}
                    </ul>
                </div>
            )
                }
            }
        }
        
        export default withRouter(EventIndex);
        
        
        
        
        
        
        
        
        
        
        
        // <div className="main-event">
        // {
        // this.props.events.map(event => (
        //     <Link className="event-index-card" key={event.id} to={`/events/${event.id}`}>
        //         <EventIndexCard className="event-index-card-comp" event={event}/>
        //     </Link>
        // ))
        // }
        
        // </div>