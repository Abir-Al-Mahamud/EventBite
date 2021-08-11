import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateEventForm from './create_event_form';
import { fetchEvent, updateEvent } from '../../actions/events';

class EditEventForm extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId)
            .then(() => this.setState({ event: this.props.event }))
    }

    render(){
        const { action, event, formType, errors } = this.props;

        if(!event) return null;

        return (
            <CreateEventForm />
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        formType: 'Edit Event',
        errors: state.errors.event,
        currentUserId: state.session.currentUserId 
    }
}

const mDTP = (dispatch) => {
    return {
        fetchEvent: eventId => dispatch(fetchEvent(eventId)),
        action: (data, eventId) => dispatch(updateEvent(data, eventId)),

    }
}

export default withRouter(connect(mSTP, mDTP)(EditEventForm));