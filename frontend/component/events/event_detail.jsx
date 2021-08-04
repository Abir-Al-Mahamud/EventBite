import React from 'react';
import { Link } from 'react-router';

class EventDetail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            event: {
                title: null,
                description: null,
                 
            }
        }
    }
    render(){
        return(
            <div className="event-img">
                <div id="back" onClick={() => this.props.history.goBack()}></div>
                <div className="event-wrapper">
                    <div className="event-left">
                        <div className="event-left-a">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventDetail;