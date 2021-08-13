import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexCard extends React.Component {

    render(){
        const { title, location, description, date, pic_url } = this.props.event;
        let desc = this.props.event.description;

        if (description.length > 40) {
            desc = description.slice(0,30) + "...";
        }

        if (pic_url.length == 0){
            return(
                <div className = "event-show-default">
                    <img src="adam-kool-ndN00KmbJ1c-unsplash.jpg" alt="mountains" />  
                    < li className = "event-idx-small-date" > { date }</li >
                    <li className="event-idx-small-title">{title}</li>
                    <li className="event-idx-description">{desc}</li>
                </div>
            )
        } else {
            return(
                <div className="event-idx-small">
                    <li className="event-idx-pic">{pic_url}</li>
                    <li className="event-idx-small-date">{date}</li>
                    <li className="event-idx-small-title">{title}</li>
                    <li className="event-idx-description">{desc}</li>
                </div>
            )
        }
    }
}

export default withRouter(EventIndexCard);