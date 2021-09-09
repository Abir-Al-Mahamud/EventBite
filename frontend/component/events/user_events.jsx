import React from "react";
import EventIndexCard from './event_index_card';
import { Link, withRouter } from 'react-router-dom';



class UserEvents extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.filterEvents = this.filterEvents.bind(this);
    }

    handleClick() {
        const { event } = this.props;
        this.props.history.push(`/events/${event.id}`)
    }

    componentWillMount(){
    this.props.requestUserEvents(this.props.currentUser);
    // const navBar = document.querySelector(".header");
    // navBar.classList.remove("white");
    }

    componentDidMount() {
        // console.log(this.props.currentUser)
        this.props.requestUserEvents(this.props.currentUser);
        // const navBar = document.querySelector(".header")
        // navBar.classList.add("white");
    }

    filterEvents(){
        let result = [];
        let eventCount = this.props.events 
        for(let i = 0; i < eventCount.length; i++){
            let event = eventCount[i];
            if (event.author_id == this.props.currentUser){
                result.push(event)
            }
        }

        return result;
    }

    render() {
        // const { event } = this.props;
        // console.log(this.props.requestEvents())
        // debugger
        console.log(this.props.events)
        if (!this.props.events) {
            return (<h2>Loading...</h2>)
        } else {

            // console.log(this.props.events)
            return (
                <div className="user-event-index">
                  
                    {/* <h2>Events in <span className="blue">New York</span></h2> */}
                    <ul className="user-event-index-list">
                        {this.filterEvents().map((event, idx) => (
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

export default withRouter(UserEvents);