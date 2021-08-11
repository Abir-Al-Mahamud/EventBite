import { connect } from 'react-redux';

import { requestEvent } from '../../actions/events';

import { selectEvent } from '../../reducers/selectors';

import EventShow from './event_show';

const mSTP = (state , { match }) => {
    const eventId = parseInt(match.params.eventId);
    const event = selectEvent(state.entities, eventId);
    
    return {
        eventId,
        event 
    };
};

const mDTP = dispatch => ({
    fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(mSTP, mDTP)(EventShow);