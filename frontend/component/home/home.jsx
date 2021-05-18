import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search'

class Home extends React.Component {
    render(){
        let press_button;
    if (this.props.currentUser) {
        press_button = <button className="home-page-button"><Link to="/login">Login to start creating events</Link></button>
    } else {
        press_button = <p></p>
    }
    return (
        <div className="home">
                    {Search}
            {/* <h1>eventbite</h1> */}
            <div className="float-container">
                <div className="float-child">
                    <h2 className="help">Help shape </h2>
                    <h1 className="future">the future of events</h1>
                    {press_button}
                    <img className="forest-image" src="forest.jpg"/>
                </div>
      
                <Link to='/'><img className="image-home" src={window.signupImage}/></Link>
   
            </div>
            <footer>
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