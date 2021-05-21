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

    // renderErrors(){
    //         return(
    //             <ul>
    //                 {this.props.errors.map((error, i) => (
    //                     <li key={`error: ${i}`}>
    //                         {error}
    //                     </li>
    //                 ))}
    //             </ul>
    //         )
    // }

    render(){
        if (this.state.step === 0) {
            
            return (
                <div className="box">
                    <img class="burj-image"src={window.signupImageFour} />
                    <form className="session-form-two">
                        <h1>Create an Account</h1>
                        <label>
                            <div className="input-info">
                            <input className="input-box"
                                type="text" 
                                placeholder="Email Address" 
                                value={this.state.email} 
                                onChange={this.update("email")}
                            />
                            <p>
                                {/* {this.renderErrors()} */}
                            </p>
                            <button className="login-button" onClick={this.nextForm(1)} >Continue</button>
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
                <div className="title-signup">
                    <h1>Create an </h1>
                    <h1>Account</h1>
                </div>
                    <img class="desert-image" src={window.signupImageFive} />
                    <div className='signin-box'>

                        <form onSubmit={this.handleChange} className="session-form">
                            <div className="signin-input">
                                {/* {this.renderErrors()} */}
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
                                <input className="input-box-two"
                                    type="text" 
                                    placeholder="Confirm email"
                                    value={this.state.confirmEmail}
                                    onChange={this.update('confirmEmail')}
                                />
                                <p>
                                    {/* {this.renderErrors()} */}
                                </p>
                            </label>
                            <br />
                            <div className="first-last">
                            <label>
                                <input className="input-box-two"
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.first_name}
                                    onChange={this.update("first_name")}
                                />
                                <p>
                                    {/* {this.renderErrors()} */}
                                </p>
                            </label>

                            <label>
                                <input className="input-box"
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.last_name}
                                    onChange={this.update("last_name")}
                                />
                                <p>
                                    {/* {this.renderErrors()}   */}
                                </p>
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
                                {/* <p>{this.renderErrors()}</p> */}
                            </label>
                            </div>
                            <button className="session-submit">Continue</button>
                            {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                        </form>
                    </div>
                    <div className="link-to-login">
                        <Link className="link" to="/login">Log in</Link>
                    </div>
                </>
            )
        }
    }
}

export default Signup;