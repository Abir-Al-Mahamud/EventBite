import React from 'react';
import { Link } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.renderErrors = this.renderErrors.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleChange(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.processForm(this.state)
    }

    handleDemoUser(e){
        e.preventDefault();
        this.props.processForm({ email: 'abir@gmail.com', password: '123456' })
    }

    renderErrors() {
        return (
            <ul>
                <li >
                    {this.props.errors}
                </li>
            </ul>
        )
    }

    render(){
            
        return (
            <div className="box">
                <form className="session-form" onSubmit={this.handleChange}>
                    <h1 className="h1">Log in </h1>
                    <img className="dubai-image" src={window.signupImageThree} />
                    <div className="errors-login">
                        {this.renderErrors()}
                    </div>
                    <div className="input-info">
                    <label className="custom-label">
                        <input className="input-box"
                            type="text"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <br />
                    <label className="custom-label">
                        <input className="input-box"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                        {/* {this.renderErrors()} */}
                    </label>
                    </div>
                    <div className="space-between">

                    </div>
                    <button className="login-button" onClick={this.handleChange}>Log in</button>
                    <button className="demo-button" onClick={this.handleDemoUser}>Demo User</button>
                    </form>

                        <div className="link-to-signup">
                            <Link className="link" to="/signup">Sign up for eventbite</Link>
                        </div>

                    </div>

                )
    
        }
}

export default Login