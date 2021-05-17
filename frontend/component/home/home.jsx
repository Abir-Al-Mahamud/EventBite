import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            {/* <h1>eventbite</h1> */}
            <div className="float-container">
                <div className="float-child">
                    <h2 className="help">Help shape the </h2>
                    <h1 className="future">the future of events</h1>
                </div>
                
                <img className="forest-image" src="forest.jpg"/>
      
                <Link to='/'><img className="image-home" src={window.signupImage}/></Link>
   
            </div>
        </div>
    )
}

export default Home;