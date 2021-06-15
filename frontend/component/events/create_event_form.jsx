import React from 'react';

class EventForm extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.props.submitEvent(this.state);
    }

    update(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <div className="modal">
                    <div className="modal-content">

                    <label>
                        <input className="event-input" 
                            type="text" 
                            value={this.state.title} 
                            onChange={this.update('title')}
                        />
                    </label>
                    <label>
                        <textarea  className="event-input"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                    <label>
                        <input className="date-input" 
                            type="date" 
                            value={this.state.date}
                            onChange={this.update('date')}
                        />
                    </label>
                    <label>
                        <input className="event-input" 
                            type="text" 
                            value={this.state.author}
                            onChange={this.update('author')}
                        />
                    </label>
                    <label>
                        <input className="time-input" 
                            type="time" 
                            value={this.state.start_time}
                            onChange={this.update('start_time')}
                        />
                    </label>
                    <label>
                        <input className="time-input" 
                            type="time" 
                            value={this.state.end_time}
                            onChange={this.update('end_time')}
                        />
                    </label>
                    <button className="modal-submit" onClick={this.handleSubmit}>Create Event</button>
                    <button className="modal-close">Close</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default EventForm;