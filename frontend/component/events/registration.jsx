import React from 'react';

class Registration extends React.Component{
    constructor(props){
        super(props);

        this.filterEvents = this.filterEvents.bind(this);
    }

    componentDidMount(){
        this.props.fetchRegistrations(this.props.currentUserId)
    }

    filterEvents(){
        let result = [];
        let eventCount = this.props.events
        for (let i = 0; i < eventCount.length; i++) {
            let event = eventCount[i];
            if (event.author_id == this.props.currentUser) {
                result.push(event)
            }
        }

        return result;
    }

    render(){

    }
}

export default Registration