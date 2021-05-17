import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.nextForm = this.nextForm.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleChange(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createNewUser(user)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
            
        <img className="signup-image" src={window.signupPage} />
        return (
            <div>
                <form className="session-form">
                    <h1>Login </h1>
                    <label>
                        <input className="input-box"
                            type="text"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                        <button onClick={this.nextForm(1)} disabled={this.customErrorEmail()}>Continue</button>
                    </label>
                    <br />
                    <label>
                        <input className="input-box"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            />
                    </label>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    </form>
                        <p>{this.props.navLink}</p>
                    </div>

                )
    
        }
}

export default Login