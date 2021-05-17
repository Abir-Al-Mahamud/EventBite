import React from 'react';
import { Link } from 'react-router-dom'; 
import FormUserDetails from './user_details'; 

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
        this.onSubmit = this.onSubmit.bind(this);
        this.customErrorEmail = this.customErrorEmail;
    }

    handleChange(type){
        return (e) => {
            e.preventDefault();
            this.setState({ [type]: e.target.value })
        }
    }

    // checkInput(){
    //     if (this.confirmEmail === this.email) {
    //         return (e) => {
    //             this.setState({ [type]: e.target.value })
    //         };
    //     } else {
    //         return "Email does not match original email";
    //     }
    // }

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
    
    onSubmit(e){
        e.preventDefault();
        if(this.passwordErrors() === false){
            this.setState({ passwordErrors: false })
            this.props.createNewUser(this.state)
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

    render(){
        <ul>
        </ul>
        if (this.state.step === 0) {
            <img src={window.signupPage}/>
            return (
                <div>
                    <form className="session-form">
                        <h2>Create an Account</h2>
                        <label>
                            <input className="input-box"
                                type="text" 
                                placeholder="Email Address" 
                                value={this.state.email} 
                                onChange={this.handleChange("email")}
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
                    <form className="session-form">
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
                                onChange={this.handleChange('confirmEmail')}
                            />
                        </label>
                        <br />
                        <div className="first-last">
                        <label>
                            <input className="input-box"
                                type="text"
                                placeholder="First Name"
                                value={this.state.first_name}
                                onChange={this.handleChange("first_name")}
                            />
                        </label>

                        <label>
                            <input className="input-box"
                                type="text"
                                placeholder="Last Name"
                                value={this.state.last_name}
                                onChange={this.handleChange("last_name")}
                            />
                        </label>
                        </div>
                        <br />
                        <label>
                            <input className="input-box"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                            />
                        </label>
                        <input type="submit" value="Create Account" onClick={this.onSubmit} />
                    </form>

                </>
            )
        }
    }
}

export default Signup;