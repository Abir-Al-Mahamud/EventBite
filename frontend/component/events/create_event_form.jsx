import React from 'react';

class EventForm extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.props.submitEvent(this.state);
        //how to redirect to splash page
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

                    <label className="title-input">Title
                        <input className="event-input" 
                            type="text" 
                            value={this.state.title} 
                            onChange={this.update('title')}
                        />
                    </label>
                    <label className="description-input">
                        <textarea  className="desc-input"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                    <label className="date-input">
                        <input className="date-input" 
                            type="date" 
                            value={this.state.date}
                            onChange={this.update('date')}
                        />
                    </label>
                    <label className="category-input">
                        <select name="category" onChange={this.update('category')}>Category
                            <option value="all">All</option>
                            <option value="for you">For you</option>
                            <option value="religion">Religion</option>
                            <option value="online">Online</option>
                            <option value="today">Today</option>
                            <option value="free">Free</option>
                            <option value="charity and causes">Charity and Causes</option>
                            <option value="free">Free</option>
                        </select> 
                    </label>
                    <label className="author-input">
                        <input className="author-input" 
                            type="text" 
                            value={this.state.author_name}
                            onChange={this.update('author_name')}
                        />
                    </label>
                    <label className="time-start-input">
                        <input className="time-input" 
                            type="time" 
                            value={this.state.start_time}
                            onChange={this.update('start_time')}
                        />
                    </label>
                    <label className="time-end-input">
                        <input className="time-input" 
                            type="time" 
                            value={this.state.end_time}
                            onChange={this.update('end_time')}
                        />
                    </label>
                    <input type="submit" className="modal-submit" value="Create Event"  />
                    {/* <button className="modal-close">Close</button>  */}
                    </div>
                </div>
            </form>
        )
    }
}

export default EventForm;