import React from 'react';
import { Link } from 'react-router';

const EventDetail = ({ event }) => {
    return(
        <div>
            <ul className="event-list">

                <li>{event.title}</li>
                <li>{event.description}</li>
                <li>{event.date}</li>
                <li>{event.category}</li>
                <li>{event.start_time}</li>
                <li>{event.end_time}</li>
                <li>{event.author_name}</li>
            </ul>
            <br/>
        </div>
    );
};

export default EventDetail;