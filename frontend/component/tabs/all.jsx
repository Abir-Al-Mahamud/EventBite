import React from 'react';
import Tabs from '../tabs';
import UserEvents from '../events/user_events_container';
import Registration from '../events/registration_container';

class AllEvents extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        const usersEventTab = [
            { name: 'Events by You', content: <UserEvents/> },
            { name: 'Events Registered', content: <Registration/> }

        ]

        return(
            <Tabs tabs={usersEventTab}/>
        )
    }
}

export default AllEvents