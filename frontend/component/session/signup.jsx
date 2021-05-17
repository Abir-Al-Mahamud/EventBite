import React from 'react';

class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            step: 0,
            email: '',
            confirmEmail: '',
            first_name: '',
            last_name: '',
            password: '',
            passwordErrors: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.nextForm = this.nextForm.bind(this);
    }

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleChange(e){
            e.preventDefault();
            const user = Object.assign({}, this.state);
            this.props.createNewUser(user)
    }

    nextForm(num) {
        return (e) => {
            e.preventDefault();
            this.setState({ step: num })
        }
    }
    prevForm(num) {
        return (e) => {
            e.preventDefault();
            this.setState({ step: num})
        }
    }

    passwordErrors(){
        if (this.state.password.length > 6){
            return false
        }
        this.setState({ passwordErrors: true})
    }

    customErrorEmail() {
        if (this.state.email.includes(".com")){
            return false;
        }
        return true;
    }

    renderErrors(){
        return(
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
     
        if (this.state.step === 0) {
            <img className="signup-image" src={window.signupImage}/>
            return (
                <div>
                    <form className="session-form">
                        <h1>Create an Account</h1>
                        <label>
                            <input className="input-box"
                                type="text" 
                                placeholder="Email Address" 
                                value={this.state.email} 
                                onChange={this.update("email")}
                            />
                            <button onClick={this.nextForm(1)} disabled={this.customErrorEmail()}>Continue</button>
                        </label>
                    </form>
                </div>
            )
        }

        if (this.state.step === 1) {
            return (
                <>
                    <h1>Create an </h1>
                    <h1>Account</h1>
                    <form onSubmit={this.handleChange} className="session-form">
                        
                        <label>
                            <input className="input-box-filled"
                                type="text"
                                placeholder="Email Address"
                                value={this.state.email}
                                disabled
                            />
                        </label>
                        <br />
                        <label>
                            <input className="input-box"
                                type="text" 
                                placeholder="Confirm email"
                                value={this.state.confirmEmail}
                                onChange={this.update('confirmEmail')}
                            />
                        </label>
                        <br />
                        <div className="first-last">
                        <label>
                            <input className="input-box"
                                type="text"
                                placeholder="First Name"
                                value={this.state.first_name}
                                onChange={this.update("first_name")}
                            />
                        </label>

                        <label>
                            <input className="input-box"
                                type="text"
                                placeholder="Last Name"
                                value={this.state.last_name}
                                onChange={this.update("last_name")}
                            />
                        </label>
                        </div>
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
                </>
            )
        }
    }
}

export default Signup;