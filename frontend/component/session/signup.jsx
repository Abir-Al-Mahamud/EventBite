import React from 'react';
import { Link } from 'react-router-dom';

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

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    componentDidMount(){
        this.props.clearSessionErrors();
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
        if(this.props.errors.length > 0){
            return(
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error: ${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        } else {
            return []
        }
    }

    nextForm(num) {
        let formErrors = this.renderErrors()
        return (e) => {
            if (this.props.errors.length === 0) {
                e.preventDefault();
                this.setState({ step: num })
            } else{
                return this.props.errors[0]
            }
        }
        
    }

    render(){
        let formErrors = this.renderErrors();
        if (this.state.step === 0) {
            
            return (
                <div className="box">
                    <img className="dubai-image-two" src={window.signupImageThree} />
                    <form className="session-form-two">
                        <h1>Create an Account</h1>
                        <div className="errors-signup">
                        </div>
                        <label>
                            <div className="input-info">
                            <input className="input-box"
                                type="text" 
                                placeholder="Email Address" 
                                value={this.state.email} 
                                onChange={this.update("email")}
                            />
                            <button className="signup-button" onClick={this.nextForm(1)}>Continue</button>
                            </div>
                        </label>
                    <div className="link-to-login">
                        <Link className="link" to="/login">Log in</Link>
                    </div>
                    </form>
                </div>
            )
        }

        if (this.state.step === 1) {
            return (

                <>
                
                    <div className="back-to-form-one">
                        <button onClick={this.prevForm(0)} className="far fa-arrow-alt-circle-left"></button>
                    </div>
                    <img className="dubai-image-three" src={window.signupImageTwo} />
                    <div className='signin-box'>
                <div className="box">

                        <form onSubmit={this.handleChange} className="session-form-three">
                            <h1>Create an Account</h1>
                                <div className="errors-signup">
                                    {this.renderErrors()}
                                </div>
                            <div className="input-info">
                            
                                <input className="input-box-filled"
                                    type="text"
                                    placeholder="Email Address"
                                    value={this.state.email}
                                    disabled
                                    />
                            
                            <br />
                                <input className="input-box-two"
                                    type="text" 
                                    placeholder="Confirm email"
                                    value={this.state.confirmEmail}
                                    onChange={this.update('confirmEmail')}
                                    />
                            <br />
                            <div className="first-last">
                                <input className="input-box-two"
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.first_name}
                                    onChange={this.update("first_name")}
                                />
                                <input className="input-box-two"
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.last_name}
                                    onChange={this.update("last_name")}
                                    />
                            </div>
                            <br />
                                <input className="input-box-two"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.update("password")}
                                    />
                                <p>{this.renderErrors()[3]}</p>

                            <button className="session-submit">Create account</button>
                            </div>
                        </form>
                    </div>
                    <div className="link-to-login-two">
                        <Link className="link-to-login-two" to="/login">Log in</Link>
                    </div>
                    </div>
                </>
            )
        }
    }
}

export default Signup;