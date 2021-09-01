import React from "react";
import EventIndexCard from './event_index_card';
import { Link, withRouter } from 'react-router-dom';


class UserEvents extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { event } = this.props;
        this.props.history.push(`/events/${event.id}`)
    }

    // componentWillMount(){
    // this.props.requestEvents();
    // const navBar = document.querySelector(".header");
    // navBar.classList.remove("white");
    // }

    componentDidMount() {
        // console.log(this.props.currentUser)
        this.props.requestUserEvents(this.props.currentUser);
        // const navBar = document.querySelector(".header")
        // navBar.classList.add("white");
    }

    filterEvents(){
        //make a function that filters over the events and selects that events that match the current_user_id 
        //utilize a loop
        

    }

    render() {
        // const { event } = this.props;
        // console.log(this.props.requestEvents())
        // debugger

        if (!this.props.events) {
            return (<h2>Loading...</h2>)
        } else {

            // console.log(this.props.events)
            return (
                <div className="user-event-index">
                    {/* <h2>Events in <span className="blue">New York</span></h2> */}
                    <ul className="event-index-list">
                        {this.props.events.map((event, idx) => (
                            <Link key={event.id} to={`/events/${event.id}`}>
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