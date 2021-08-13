import React from 'react';
import EventIndexCard from './event_index_card';
import { Link } from 'react-router-dom';


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
        const { event } = this.props;
        const indexTime = DateTimeUtil.indexTime(event);
        // debugger
        // console.log(this.props.events)
        if(!this.props.events) {
            return ( <h2>Loading...</h2> )
        } else { 
            
            return(
                <div className="event-index-item">
                    <h1 className="events-near-you">Events Near You </h1>
                    <div className="event-index-image">
                        <img src={event.pic_url} alt={event.title} onClick={this.handleClick}/>
                    </div>
                    <div className="event-index-like">

                    </div>
                    <div className="event-index-time">
                        {indexTime}
                    </div>
                    <div className="event-index-title">
                        {event.title}
                    </div>

                </div>
                    )
                }
            }
        }
        
        export default EventIndex;
        
        
        
        
        
        
        
        
        
        
        
        // <div className="main-event">
        // {
        // this.props.events.map(event => (
        //     <Link className="event-index-card" key={event.id} to={`/events/${event.id}`}>
        //         <EventIndexCard className="event-index-card-comp" event={event}/>
        //     </Link>
        // ))
        // }
        
        // </div>