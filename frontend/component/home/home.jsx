import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search'
import Tabs from '../tabs';

class Home extends React.Component{
    constructor(){
        super(props)
    }
    const display = (
        <div className="all">
            <div className="square">Hello</div>
            <div className="square">There</div>
            <div className="square">Whats</div>
            <div className="square">Up!</div>
        </div>

);
    render(){
        // const all = <div className="square">HELLO!!!</div>
        const tabs = [
            { name: 'All', content: `${display}`},
            { name: 'For you', content: 'Event2' },
            { name: 'Religion', content: 'Event3' },
            { name: 'Online', content: 'Event4' },
            { name: 'Today', content: 'Event5' },
            { name: 'This weekend', content: 'Event6' },
            { name: 'Free', content: 'Event7' },
            { name: 'Charity & Causes', content: 'Event8' },
            { name: 'Free', content: 'Event9' }
        ]

    return (
        <div className="home">
                    {Search}
            {/* <h1>eventbite</h1> */}
            <div className="float-container">
                <div className="float-child">
                    <h2 className="help">Help shape the</h2>
                    <h1 className="future">future of your events</h1>
                    <br />
                    <button className="home-button"><Link className="to-events" to="/events">Browse Events</Link></button>
                    
                </div>
            <div className="forest-image-main">
                    <img className="forest-image"src={window.signupImageSeven}/>
            </div>
            </div>
            <div className="interacting">
                <Tabs tabs={tabs}/>
            </div>
            <footer className="footer">
                <div className="footer">
                    <a href="https://www.linkedin.com/in/abir-mahamud-38526510b">LinkedIn    </a>
                    <a href="https://github.com/Abir-Al-Mahamud">  GitHub</a>
                </div>
            </footer>
        </div>
    )

    }
}


export default Home;