import { connect } from 'react-redux';

import { requestEvent, requestEvents } from '../../actions/events';

import { selectEvent } from '../../reducers/selectors';

import EventShow from './event_show';

const mSTP = (state, ownProps, { match }) => {
    const eventId = parseInt(match.params.eventId);
    const event = selectEvent(state.entities, eventId);
    
    return {
        eventId,
        event: state.events[ownProps.match.params.eventId] 
    };
};

const mDTP = dispatch => ({
    fetchEvent: id => dispatch(requestEvent(id))
});

export default connect(mSTP, mDTP)(EventShow);