import React from 'react';
import { withRouter } from 'react-router-dom';
import { compareAsc, format } from 'date-fns';

class EventIndexCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: true
        } 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { event } = this.props;
        console.log(event)
        this.props.history.push(`/events/${event.id}`)
    }

    render(){
        const { event } = this.props

        // const { title, location, description, date, pic_url } = this.props.event;
        // let desc = this.props.test.description;
        
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
                {/* <div className="event-index-like" onClick={() => this.setState({ liked: !this.state.liked })}>
                    { this.state.liked
                    ? <i className="far fa-heart"></i>
                    : <i className="fas fa-heart"></i>
                    }
                </div> */}
                <div className="event-index-title">
                    {event.title}
                </div>
                <div className="event-index-date">
                    {format(new Date(event.date), 'MM-dd-yyyy')}
                </div>

                
            </div>
        )
      
    }
}

export default withRouter(EventIndexCard);