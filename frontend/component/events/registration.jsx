import React from 'react';

class Registration extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            registrations: [] 
        }

        this.filterEvents = this.filterEvents.bind(this);
    }

    componentDidMount(){
        debugger
        this.props.fetchRegistrations(this.props.currentUserId)
            .then(regs => {
                let result = []
                for (let i = 0; i < regs.length; i++) {
                    let reg = regs[i];
                    if (reg.buyer_id == this.props.currentUserId) {
                        result.push(reg)
                    }
                }
                debugger
                this.setState({registrations: result})
            })
    }

    filterEvents(){
        let result = [];
        return this.props.fetchRegistrations()
        .then(regs => {
            debugger
            for (let i = 0; i < regs.length; i++) {
                    let reg = regs[i];
                    if (reg.buyer_id == this.props.currentUserId) {
                        result.push(reg)
                    }
                }
                return result;
            }
            )


    }

    render(){

        console.log(this.state)
        if (!this.props.events) {
            return (<h2>Loading...</h2>)
        } else {

            // console.log(this.props.events)
            return (
                <div className="user-event-index">

                    {/* <h2>Events in <span className="blue">New York</span></h2> */}
                    <ul className="user-event-index-list">
                        {this.state.registrations.map((event, idx) => (
                            <Link className="event-index-links" key={event.id} to={`/events/${event.id}`}>
                                <EventIndexCard
                                    className="event-index-card-comp"
                                    event={event}
                                    // currentUserId={currentUserId}
                                    key={idx}
                                />
                            </Link>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Registration