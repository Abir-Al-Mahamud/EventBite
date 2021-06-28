import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexCard extends React.Component {

    render(){
        const { title, location, description } = this.props.event;
        let desc = this.props.event.description;

        if (description.length > 40) {
            desc = description.slice(0,30) + "...";
        }

        return(
            <div className="event-idx-small">
                <li className="event-idx-small-title">{title}</li>
                <li>{location}</li>
                <li>{desc}</li>
            </div>
        )
    }
}

export default withRouter(EventIndexCard);