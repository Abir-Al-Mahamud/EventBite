import React from 'react';
import { compareAsc, format, getDate, getTime } from 'date-fns';

class EventForm extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearEventErrors();
    }

    componentDidMount() {
        this.props.clearEventErrors();
    }

    handleSubmit(){
        if (this.props.formType === 'Edit Event'){
            this.props.submitEvent(this.state)
            .then(this.props.history.push('/'));
        } else {
            this.props.submitEvent(this.state)
        }
        
    }

    update(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderErrors() {
        let formErrors = this.props.errors
        if (formErrors !== undefined && formErrors.length > 0) {
            return (
                <ul>
                    {formErrors.map((error, i) => (
                        <li key={`error: ${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        } else {
            return ""
        }
    }

    render(){
        let formErrors = this.props.errors

        return(
            <form onSubmit={this.handleSubmit}>
                <h1 className="create-event-form-type">{this.props.formType}</h1>
                <div className="errors-event">
                    {this.renderErrors()}
                </div>
                <div className="modal">
                    <div className="modal-content">
                        
                    <label className="title-input">Title
                        <input className="event-input" 
                            type="text" 
                            value={this.state.title} 
                            onChange={this.update('title')}
                        />
                    </label>
                        
                    <label className="description-input">Description
                        <textarea  className="desc-input"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                        
                    <label className="date-input">Date
                        <input className="date-input" 
                            type="date" 
                            value={this.state.date}
                            onChange={this.update('date')}
                        />
                    </label>
                        
                    <label className="category-input">Category
                            <select name="category" onChange={this.update('category')} >Category

                            <option value="Select one">Select One</option>
                            <option value="religion">Religion</option>
                            <option value="online">Online</option>
                            <option value="today">Today</option>
                            <option value="charity and causes">Charity and Causes</option>
                            <option value="free">Free</option>
                            <option value="other">Other</option>
                        </select> 
                    </label>
                        
                    <label className="img-input">Image Link
                        {/* <input className="img-input"
                            type="text"
                            value={this.state.pic_url}
                            // onChange={this.update('pic_url')}
                        /> */}
                            <select name="category" onChange={this.update('pic_url')} >Image 

                                <option value="Select one">Select One</option>
                                <option value="assets/forest.png">Forest</option>
                                <option value="assets/biking.png">Biking</option>
                                <option value="assets/cars.png">Cars</option>
                                <option value="assets/family.png">Family</option>
                                <option value="assets/palm-dubai.png">Palm Dubai</option>
                                <option value="assets/rainbow.jpg">Rainbow</option>
                                <option value="assets/python.jpg">Python</option>
                                <option value="assets/geology.jpg">Geology</option>
                                <option value="assets/spiritual.jpg">Spiritual</option>
                                <option value="assets/summercamp.jpg">Summercamp</option>
                                <option value="assets/basketball.jpg">Basketball</option>
                                
                            </select>
                    </label>
                    
                    <label className="time-start-input">Start Time
                        <input className="time-input" 
                            type="time" 
                            value={this.state.start_time}
                            onChange={this.update('start_time')}
                        />
                    </label>
                       
                    <label className="time-end-input">End Time
                        <input className="time-input" 
                            type="time" 
                            value={this.state.end_time}
                            onChange={this.update('end_time')}
                        />
                    </label>
                    <input type="submit" className="modal-submit" value={this.props.formType}  />
                    
                    </div>
                </div>
            </form>
        )
    }
}

export default EventForm;