import { connect } from 'react-redux';
import { createEvent, updateEvent, clearEventErrors } from '../../actions/events';
import EventForm from './create_event_form';

const mSTP = ({ errors }) => ({
    event: {
        title: '',
        description: '',
        date: '',
        category: '', 
        author_name: '', 
        start_time: '',
        end_time: '',
        pic_url: ''
    },
    formType: 'Create Event',
    errors: errors.event
})

const mDTP = (dispatch) => ({
    submitEvent: (event) => dispatch(createEvent(event)),
    clearEventErrors: () => dispatch(clearEventErrors())
})

export default connect(mSTP, mDTP)(EventForm);