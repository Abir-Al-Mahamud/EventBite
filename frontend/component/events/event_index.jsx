import React from 'react';

class EventIndex extends React.Component{

    componentWillUnmount(){
        const navBar = document.querySelector(".header");
        navBar.classList.remove("white");
    }

    componentDidMount(){
        this.props.fetchEvents();
        const navBar = document.querySelector(".header")
        navBar.classList.add("white");
    }

    render(){

    }
}

export default EventIndex;