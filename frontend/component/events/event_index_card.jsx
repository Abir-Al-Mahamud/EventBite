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
        this.props.history.push(`/events/${event.id}`)
    }

    render(){
        const { event } = this.props

        return (
            <div className="event-index-item">
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
                    {format(new Date(event.date), 'MM/dd/yyyy')}
                </div>

                
            </div>
        )
      
    }
}

export default withRouter(EventIndexCard);