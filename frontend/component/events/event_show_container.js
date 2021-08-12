import { connect } from 'react-redux';

import { requestEvent, requestEvents, deleteEvent } from '../../actions/events';

import { selectEvent } from '../../reducers/selectors';

import EventShow from './event_show';

const mSTP = (state, ownProps) => ({
    // const eventId = parseInt(match.params.eventId);
    // const event = selectEvent(state.entities, eventId);
    event: state.events[ownProps.match.params.eventId] 
})
    

const mDTP = dispatch => ({
    fetchEvent: id => dispatch(requestEvent(id)),
    deleteEvent: () => dispatch(deleteEvent())
});

export default connect(mSTP, mDTP)(EventShow);