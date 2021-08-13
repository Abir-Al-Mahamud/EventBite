import React from 'react';
import EventIndexCard from './event_index_card';
import { Link, withRouter } from 'react-router-dom';


class EventIndex extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const { event } = this.props;
        this.props.history.push(`/events/${event.id}`)
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
        // const { event } = this.props;
        
        // debugger
        // console.log(this.props.events)
        if(!this.props.events) {
            return ( <h2>Loading...</h2> )
        } else { 
            
            return(
                <div className="event-index">
                    <h2>Events in <span className="blue">New York</span></h2>
                    <ul className="event-index-list">
                        {this.props.events.map((event, idx) => (
                            <EventIndexCard
                                event={event}
                                // currentUserId={currentUserId}
                                key={idx}
                            />
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