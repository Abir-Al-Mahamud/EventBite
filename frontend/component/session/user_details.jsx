import React from 'react';


class UserFormDetails extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const { values, handleChange } = this.props;

        return (
            <form>
                <label>
                    <input 
                        type="text" 
                        value={values.first_name}
                        onChange={this.handleChange} 
                        placeholder="First Name"    
                    />
                    <input 
                        type="text" 
                        value={values.last_name}
                        onChange={this.handleChange} 
                        placeholder="Last Name"    
                    />
                    <input 
                        type="password" 
                        value={values.password}
                        onChange={this.handleChange} 
                        placeholder="Password"    
                    />
                    <button onClick={this.handleChange}></button>
                </label>
            </form>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default UserFormDetails;