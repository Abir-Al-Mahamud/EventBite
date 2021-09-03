import React from 'react';
import { Link } from 'react-router-dom';

import EventDetail from './event_detail';
// import { ProtectedRoute } from '../../utils/route_utils';
import EditEventForm from './edit_form_container';
import { deleteEvent } from '../../utils/event_utils';


class EventShow extends React.Component{
    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    render(){


        const { event, currentUser } = this.props 
        console.log(event)
        const register = currentUser ? (
            <div>
                <button className="registering">Register</button>
            </div>
        ) : (
            <div>
                <Link className="regis-button" to="/login">Sign In to Register</Link>
            </div>
        );
 
        // debugger
        if (!event) {
            return null 
        } else {
            return(
                <div className="single-event-show">
                <div className="back-to-events">
                        <Link to="/"><i class="far fa-arrow-alt-circle-left"></i></Link>
                    
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
                
                <Link className="edit-event-button" to="/:eventId/edit">Edit Event</Link>
                <input className="delete-button" type="button" value="Delete Event" onClick={() => deleteEvent()} />
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