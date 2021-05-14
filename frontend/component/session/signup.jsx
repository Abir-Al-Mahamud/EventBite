import React from 'react';

class SignUp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.props.createUser(this.state);
    }

    update(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render(){
        return(
            <div className="signup-form">
                <h2>Sign Up!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name 
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                        />
                    </label>
                    <label>Last Name 
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                        />
                    </label>
                    <label>Email
                        <input 
                            type="text" 
                            value={this.state.email} 
                            onChange={this.update('email')} 
                        />
                    </label>
                    <label>Password
                        <input 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.update('password')} 
                        />
                    </label>
                    <button onClick={this.handleSubmit}>SIGN UP</button>
                </form>
            </div>
        )
    }
}

export default SignUp;