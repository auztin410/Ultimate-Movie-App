import React, { Component } from "react";
import axios from "axios";

class Login extends Component {

    state = {
        username: '',
        password: '',
        loggedIn: false,
    };

    // Handle functions
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        axios.post('/user', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
            if(response.data) {
                console.log('successful signup');
                this.setState({
                    loggedIn: true
                });
            } else {
                console.log('Sign-up error');
            }
        }). catch(error => {
            console.log('Sign up server error:');
            console.log(error);
        })
    };

    render() {
        return(
            <div>
                <form>
                    <input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Username"
                    />
                    <br/>
                    <input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password"
                    />
                    <br/>
                    <br/>
                    <button
                    disabled={!(this.state.username && this.state.password)}
                    onClick={this.handleSubmit}
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;