import React from 'react';
import FormUserDetails from './user_details'; 

class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            step: 0,
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            passwordErrors: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.nextForm = this.nextForm.bind(this);
        this.signedUp = this.signedUp.bind(this);
        this.customErrorEmail = this.customErrorEmail;
    }

    handleChange(type){
        return (e) => {
            e.preventDefault();
            this.setState({ [type]: e.target.value })
        }
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
    
    signedUp(e){
        e.preventDefault();
        if(this.passwordErrors() === false){
            this.setState({ passwordErrors: false })
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
        if (this.state.step === 0) {
            return (
                <>
                    <form className="form">
                        <h1>Create an Account</h1>
                        <label>
                            <input 
                                type="text" 
                                placeholder="Email Address" 
                                onChange={this.handleChange("email")}
                                value={this.state.email}
                            />
                            <button onClick={this.nextForm(1)} disabled={this.customErrorEmail()}>Continue</button>
                        </label>
                    </form>
                </>
            )
        }

        if (this.state.step === 1) {
            return (
                <>
                    <h1>Create an Account</h1>
                    <label>
                        <input
                            type="text"
                            placeholder="Email Address"
                            value={this.state.email}
                            disabled
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={this.state.first_name}
                            onChange={this.handleChange("first_name")}
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={this.state.last_name}
                            onChange={this.handleChange("last_name")}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </label>
                    <button onClick={this.signedUp}>Create Account</button>
                </>
            )
        }
    }
}

export default Signup;