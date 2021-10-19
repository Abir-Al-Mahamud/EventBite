import React from 'react';
import { Link } from 'react-router-dom';

import EventDetail from './event_detail';
// import { ProtectedRoute } from '../../utils/route_utils';
import EditEventForm from './edit_form_container';
// import { createRegistration, deleteEvent } from '../../actions/events';

class EventShow extends React.Component{
    constructor(props){
        super(props);

        this.handleDeleteRedirect = this.handleDeleteRedirect.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        // debugger
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    // completeRegistration(e){
    //     e.preventDefault();
        
    // }

    // deleteEventButton(){
    //     e.preventDefault();
    //     onclick(this.props.deleteEvent())
    //     this.props.history.push('/');
    // }

    handleDelete(){
        this.props.deleteRegistration();
        this.props.history.push('/');
    }

    handleRedirect(){
        this.props.history.push('/');
    }

    handleDeleteRedirect(){
        this.props.deleteEvent(this.props.event.id)
        .then(() => this.props.history.push('/'))
    }

    

    render(){

        // debugger
        const { event, currentUser, createRegistration, deleteEvent } = this.props 
        // console.log(event.id)

        
        if (!event) {
            return null 
        } else {

            const userChoice = (
                <div> 
                    <button className="register-delete" onClick={this.handleDelete}>Cancel Registration</button>
                </div>
            )
            // Register button
            const register = currentUser ? (
                <div>
                    <input className="registering" type="button" value="Register" onClick={() => createRegistration(event.id)} />
                </div>
            ) : (
                <div>
                    <Link className="regis-button" to="/login">Sign In to Register</Link>
                </div>
            );

            return(
                <div className="single-event-show">
                <div className="back-to-events">
                        <Link to="/"><i className="far fa-arrow-alt-circle-left"></i></Link>
                    
                </div>
                <ul className="event-details">
                    <img className="pic-show" src={event.pic_url}/>
                    <h1 className="title">{event.title}</h1>
                    <li className="desc">{event.description}</li>
                    <li className="date">{event.date}</li>
                    <li className="categ">{event.category}</li>
                    <li className="author">{event.author}</li>
                    <li className="start">{event.start_time}</li>
                    <li className="end">{event.end_time}</li>
                </ul>
                {/* <div className="event-details">
                    <EventDetail event={event}/>
                </div> */}
                
                <Link className="edit-event-button" to={`/${event.id}/edit`}>Edit Event</Link>
                    <button className="delete-button" onClick={() => handleDeleteRedirect()}>Delete Event</button>
                <div className="register">
                    {register}
                </div>
            </div>
            )
        }
    } 
}


// const EventShow = ({ event, eventId, fetchEvent }) => {
//     const events = {
//         [eventId]: event 
//     };

//     return(
//         <div className="single-event-show">
//             <div className="back-to-events">
//                 <Link to="/events">Back to Events</Link>
//             </div>
//             <div className="event-details">
//                 <EventDetail event={event}/>
//             </div>
//             <div className="edit-form-button">
//                 <EditEventForm />
//             </div>
//         </div>
//     );
// };

export default EventShow;