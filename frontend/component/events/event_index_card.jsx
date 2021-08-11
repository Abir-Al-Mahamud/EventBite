import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexCard extends React.Component {

    render(){
        const { title, location, description, date } = this.props.event;
        let desc = this.props.event.description;

        if (description.length > 40) {
            desc = description.slice(0,30) + "...";
        }

        return(
            <div className="event-idx-small">
                <img src="" alt="" />
                <li className="event-idx-small-date">{date}</li>
                <li className="event-idx-small-title">{title}</li>
                <li className="event-idx-description">{desc}</li>
            </div>
        )
    }
}

export default withRouter(EventIndexCard);