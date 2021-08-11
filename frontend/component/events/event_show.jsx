import React from 'react';
import { Link } from 'react-router-dom';

import EventDetail from './event_detail';
import { ProtectedRoute } from '../../utils/route_utils';
import EditEventForm from './edit_form_container';


const EventShow = ({ event, eventId, fetchEvent }) => {
    const events = {
        [eventId]: event 
    };

    return(
        <div className="single-event-show">
            <div className="back-to-events">
                <Link to="/events">Back to Events</Link>
            </div>
            <div className="event-details">
                <EventDetail event={event}/>
            </div>
            <div className="edit-form-button" onClick={}>
                <EditEventForm />
            </div>
        </div>
    );
};

export default EventShow;