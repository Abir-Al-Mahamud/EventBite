import React from 'react';
import { Link } from 'react-router-dom';
// import { ProtectedRoute } from '../../utils/route_utils';
import EditEventForm from './edit_form_container';


class EventShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonType: "register"
        }

        this.handleDeleteRedirect = this.handleDeleteRedirect.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.completeRegistration = this.completeRegistration.bind(this);
        this.removeRegistration = this.removeRegistration.bind(this);
    }
    componentDidMount(){

        this.props.fetchEvent(this.props.match.params.eventId);
        this.props.fetchRegistrations(this.props.currentUser)

    }

    completeRegistration(){

        if (!this.props.registrations.includes(this.props.event.id)){ 
            this.props.createRegistration(this.props.event.id)
            this.setState({ buttonType: "registered" })
        }
    }

    filterRegistrations(){

        const { currentUser, registrations } = this.props
        for(let i = 0; i < registrations.length; i+=1){
            if(registrations[i].buyer_id == currentUser){
                return true
            }
        }
        return false 

    }

    removeRegistration(){

        // if (this.props.registrations.includes(this.props.event.id)){
            this.props.deleteRegistration(this.props.event.id, this.props.registration.registration_id)
            this.setState({ buttonType: "register" })
        // }
    }

    handleDelete(){
        this.props.deleteRegistration();
        this.props.history.push('/');
    }

    handleRedirect(){
        this.props.history.push('/');
    }

    handleDeleteRedirect(){
        this.props.deleteEvent(this.props.event.id)
        .then(() => this.props.history.push('/'))
    }

    

    render(){

        // debugger
        const { event, currentUser, createRegistration, deleteEvent } = this.props 
        // console.log(event)
        // if(this.props.registrations){
        //     console.log(this.filterRegistrations)
        // }

        
        if (!event) {
            return null 
        } else {

            const userChoice = (
                <div> 
                    <button className="register-delete" onClick={this.handleDelete}>Cancel Registration</button>
                </div>
            )

            // Register Button 
            let registerButton;
            // debugger
            //this.state.buttonType === "register" ==========> inside if statement below
            // else if (this.state.buttonType === "registered")
            if (!this.props.registered) {
                registerButton = 
                (
                <div>
                    <input className="registering" type="button" value="Register" onClick={() => this.completeRegistration()} />
                </div>
                )
            } else{
                registerButton = 
                (
                <div>
                    <input className="registering" type="button" value="Cancel Registration" onClick={() => this.removeRegistration()} />
                </div>
                )
            }
            // Sign In Button
            const signInButton = 
            (
            <div>
                <Link className="regis-button" to="/login">Sign In to Register</Link>
            </div>
            )

            const register = currentUser ? registerButton : signInButton
                
            return(
                <div className="single-event-show">
                <div className="back-to-events">
                        <Link to="/"><i className="far fa-arrow-alt-circle-left"></i></Link>
                        {/* <button onClick={} className="far fa-arrow-alt-circle-left"></button> */}
                </div>
                <ul className="event-details">
                    <img className="pic-show" src={event.pic_url}/>
                    <h1 className="title">{event.title}</h1>
                    {/* <h2 className="desc">Event Details</h2> */}
                    <li className="desc">{event.description}</li>
                    <li className="categ">Category: {event.category}</li>
                    <li className="date">Date: {event.date}</li>
                    <li className="author">Event Creator: {event.author}</li>
                    <li className="start">Start Time: {event.start_time}</li>
                    <li className="end">End Time: {event.end_time}</li>
                </ul>
                {/* <div className="event-details">
                    <EventDetail event={event}/>
                </div> */}
                <div className="buttons">

                    <Link className="edit-event-button" to={`/${event.id}/edit`}>Edit Event</Link>
                    <button className="delete-button" onClick={() => this.handleDeleteRedirect()}>Delete Event</button>
                    <div className="register">
                        {register}
                    </div>
                </div>
            </div>
            )
        }
    } 
}


// const EventShow = ({ event, eventId, fetchEvent }) => {
//     const events = {
//         [eventId]: event 
//     };

//     return(
//         <div className="single-event-show">
//             <div className="back-to-events">
//                 <Link to="/events">Back to Events</Link>
//             </div>
//             <div className="event-details">
//                 <EventDetail event={event}/>
//             </div>
//             <div className="edit-form-button">
//                 <EditEventForm />
//             </div>
//         </div>
//     );
// };

export default EventShow;