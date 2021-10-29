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
        // debugger
        this.props.fetchEvent(this.props.match.params.eventId);
        this.props.fetchRegistrations(this.props.currentUser)
            // .then(res => {
            //     // debugger
            //     if(res.events[this.props.match.params.eventId] ){
            //         this.setState({ buttonType: "registered" })
            //     }
            // })
    }

    completeRegistration(){
        // eve.preventDefault();
        if (!this.props.registrations.includes(this.props.event.id)){ 
            this.props.createRegistration(this.props.event.id)
            this.setState({ buttonType: "registered" })
        }
    }

    ///Create function that filters through registrations and compares event_id 

    filterRegistrations(){
        // debugger
        // return Object.keys(this.props.registrations).includes(this.props.event.id)
        const { currentUser, registrations } = this.props
        for(let i = 0; i < registrations.length; i+=1){
            if(registrations[i].buyer_id == currentUser){
                return true
            }
        }
        return false 

    }

    removeRegistration(){
        //Throw in a debugger here to see what registrations contains. 
        //The if statement is not being entered into
        // debugger
        // console.log(this.props)
        if (this.props.registrations.includes(this.props.event.id)){
            this.props.deleteRegistration(this.props.event.id, this.props.registration.id)
            this.setState({ buttonType: "register" })
        }
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
            if (this.filterRegistrations) {
                registerButton = 
                (
                <div>
                    <input className="registering" type="button" value="Register" onClick={() => this.completeRegistration(event)} />
                </div>
                )
            } else if(this.state.buttonType === "registered"){
                registerButton = 
                (
                <div>
                    <input className="registering" type="button" value="Cancel Registration" onClick={() => this.removeRegistration(event)} />
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
                

            // Register button
            // const register = currentUser ? (
                // if(this.state.buttonType === "register"){
                //     <div>
                //         <input className="registering" type="button" value="Register" onClick={() => this.completeRegistration(event)} />
                //     </div>
                // } elsif(this.state.buttonType === "registered"){
                // <div>
                //     <input className="registering" type="button" value="Cancel Registration" onClick={() => this.removeRegistration(event)} />
                // </div>
                // }
        //      ) : (
        //         <div>
        //             <Link className="regis-button" to="/login">Sign In to Register</Link>
        //         </div>
        // );

            return(
                <div className="single-event-show">
                <div className="back-to-events">
                        <Link to="/"><i className="far fa-arrow-alt-circle-left"></i></Link>
                    
                </div>
                <ul className="event-details">
                    <img className="pic-show" src={event.pic_url}/>
                    <h1 className="title">{event.title}</h1>
                    <li className="desc">{event.description}</li>
                    <li className="date">{event.date}</li>
                    <li className="categ">{event.category}</li>
                    <li className="author">{event.author}</li>
                    <li className="start">{event.start_time}</li>
                    <li className="end">{event.end_time}</li>
                </ul>
                {/* <div className="event-details">
                    <EventDetail event={event}/>
                </div> */}
                
                <Link className="edit-event-button" to={`/${event.id}/edit`}>Edit Event</Link>
                <button className="delete-button" onClick={() => this.handleDeleteRedirect()}>Delete Event</button>
                <div className="register">
                    {register}
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