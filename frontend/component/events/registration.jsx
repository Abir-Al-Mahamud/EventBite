import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexCard from './event_index_card';

class Registration extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            registrations: []
        }

        this.handleRedirect = this.handleRedirect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.filterEvents = this.filterEvents.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.fetchRegistrations(this.props.currentUserId)
       
    }

    filterEvents(){
        let result = [];
        const hello = this.props.events
            for (let i = 0; i < hello.length; i++) {
                    let reg = hello[i];
                    if (reg.buyer_id == this.props.currentUserId) {
                        result.push(reg)
                    }
                }
                console.log(result[0])
                return result;
            

    }

    handleRedirect(e){
        e.preventDefault();
        this.props.history.push('/login')
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createRegistration(this.props.event.id)

    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteRegistration(this.props.event.id, this.props.registration_id)
    }
 
    render(){
        // debugger
        const actbutton = this.props.currentUserId ? 
        <button className="register-button" onClick={this.handleSubmit}>Register</button> :
        <button className="register-redirect" onClick={this.handleRedirect}>Sign In to Register</button>

        const userChoice = (
            <div>
                <button className="register-delete" onClick={this.handleDelete}>Cancel Registration</button>
            </div>
        )
        if (!this.props.registrations) {
            return (<h2>Loading...</h2>)
        } else {
            
            
            // console.log(this.props.events)
            console.log(this.props.registrations)
            return (
                <div className="user-event-index">

                    {/* <h2>Events in <span className="blue">New York</span></h2> */}
                    <ul className="user-event-index-list">
                        {this.props.registrations.map((event, idx) => (
                            <Link className="event-index-links" key={event.event_id} to={`/events/${event.event_id}`}>
                                <EventIndexCard
                                    className="event-index-card-comp"
                                    event={event}
                                    // currentUserId={currentUserId}
                                    key={event.event_id}
                                />
                            </Link>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Registration