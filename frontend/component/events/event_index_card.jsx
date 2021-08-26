import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexCard extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { event } = this.props;
        this.props.history.push(`/events/${test.id}`)
    }

    render(){
        // const { title, location, description, date, pic_url } = this.props.event;
        // let desc = this.props.test.description;
        const { event } = this.props

        // if (event.description.length > 40) {
        //     let desc = description.slice(0 ,30) + "..."; 
        // }
        // console.log("HELLO", event.pic_url);
        return (
            <div className="event-index-item">
                {/* <h1 className="events-near-you">Events Near You </h1> */}
                <div className="event-index-image">
                    <img src={event.pic_url} alt={event.title} onClick={this.handleClick}/>
                </div>
                <div className="event-index-like">

                </div>
                <div className="event-index-title">
                    {event.title}
                </div>
                <div className="event-index-date">
                    {event.date}
                </div>

                
            </div>
        )
        // if (pic_url.length == 0){
        //     return(
        //         <div className = "event-show-default">
        //             <img src="adam-kool-ndN00KmbJ1c-unsplash.jpg" alt="mountains" />  
        //             < li className = "event-idx-small-date" > { date }</li >
        //             <li className="event-idx-small-title">{title}</li>
        //             <li className="event-idx-description">{desc}</li>
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div className="event-idx-small">
        //             <li className="event-idx-pic">{pic_url}</li>
        //             <li className="event-idx-small-date">{date}</li>
        //             <li className="event-idx-small-title">{title}</li>
        //             <li className="event-idx-description">{desc}</li>
        //         </div>
        //     )
        // }
    }
}

export default withRouter(EventIndexCard);