import React from 'react';
import { compareAsc, format, getDate, getTime } from 'date-fns';

class EventForm extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        // debugger
        this.props.clearSessionErrors;
    }

    handleSubmit(){
        // console.log(this.props)
        // debugger
        this.props.submitEvent(this.state);
        // this.props.history.push('/');
        
    }

    update(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderErrors() {
        // console.log(this.props)
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
        // console.log(this.renderErrors())
        // let formErrors = this.props.errors !== undefined ? this.renderErrors() : ["", "", "", "", "", ""] 
        let formErrors = this.props.errors
        // console.log(formErrors[1])
        // if (this.props.errors !== undefined){
        //     return (
        //     <div className="errors-event">
        //         {this.renderErrors()}
        //     </div>
        //     )
        // } else {

        // }
        console.log(this.props.event)
        return(
            <form onSubmit={this.handleSubmit}>
                <h1 className="create-event-form-type">{this.props.formType}</h1>
                <div className="errors-event">
                    {this.renderErrors()}
                </div>
                <div className="modal">
                    <div className="modal-content">
                        {/* <div className="errors-event">
                            {formErrors[0]}
                        </div> */}
                    <label className="title-input">Title
                        <input className="event-input" 
                            type="text" 
                            value={this.state.title} 
                            onChange={this.update('title')}
                        />
                    </label>
                        {/* <div className="errors-event">
                            {formErrors[1]}
                        </div> */}
                    <label className="description-input">Description
                        <textarea  className="desc-input"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                        {/* <div className="errors-event">
                            {formErrors[2]}
                        </div> */}
                    <label className="date-input">Date
                        <input className="date-input" 
                            type="date" 
                            value={this.state.date}
                            onChange={this.update('date')}
                        />
                    </label>
                        {/* <div className="errors-event">
                            {formErrors[3]}
                        </div> */}
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
                        {/* <div className="errors-event">
                            {formErrors[4]}
                        </div> */}
                    <label className="img-input">Image Link
                        {/* <input className="img-input"
                            type="text"
                            value={this.state.pic_url}
                            // onChange={this.update('pic_url')}
                        /> */}
                            <select name="category" onChange={this.update('pic_url')} >Image 

                                <option value="assets/forest.png">Forest</option>
                                <option value="assets/desert.png">Desert</option>
                                <option value="assets/burj.png">Burj</option>
                                <option value="assets/dubai-beach.png">Dubai</option>
                                <option value="assets/palm-dubai.png">Palm Dubai</option>
                                <option value="assets/rainbow.jpg">Rainbow</option>
                                <option value="assets/compass.jpg">Compass</option>
                                
                            </select>
                    </label>
                    {/* <label className="author-input">Author
                        <input className="author-input" 
                            type="text" 
                            value={this.state.author_name}
                            onChange={this.update('author_name')}
                        />
                    </label> */}
                        {/* <div className="errors-event">
                            {formErrors[5]}
                        </div> */}
                    <label className="time-start-input">Start Time
                        <input className="time-input" 
                            type="time" 
                            value={this.state.start_time}
                            onChange={this.update('start_time')}
                        />
                    </label>
                        {/* <div className="errors-event">
                            {formErrors[6]}
                        </div> */}
                    <label className="time-end-input">End Time
                        <input className="time-input" 
                            type="time" 
                            value={this.state.end_time}
                            onChange={this.update('end_time')}
                        />
                    </label>
                    <input type="submit" className="modal-submit" value={this.props.formType}  />
                    {/* <button className="modal-close">Close</button>  */}
                    </div>
                </div>
            </form>
        )
    }
}

export default EventForm;