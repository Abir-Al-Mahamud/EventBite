import React from 'react';
import CreateEventForm from './create_event_form';
// import { requestEvent, changeEvent } from '../../actions/events';

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId)
            .then(() => this.setState({ event: this.props.event }))
    }

    // componentWillUnmount(){
    //     this.props.history.push('/');
    // }
    render() {
        const { action, event, formType, errors, submitEvent } = this.props;

        if (!event) return null;


        return (
            <CreateEventForm
                event={event}
                formType={formType}
                submitEvent={submitEvent}
            />
        )
    }
}

export default EditEventForm