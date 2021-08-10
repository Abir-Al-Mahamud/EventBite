import { connect } from 'react-redux';
import { createEvent } from '../../actions/events';
import EventForm from './create_event_form';

const mSTP = (state) => ({
    event: {
        title: '',
        description: '',
        date: '',
        category: '', 
        author_name: '', 
        start_time: '',
        end_time: ''
    },
    formType: 'Create Event'
})

const mDTP = (dispatch) => ({
    submitEvent: (event) => dispatch(createEvent(event))
})

export default connect(mSTP, mDTP)(EventForm);