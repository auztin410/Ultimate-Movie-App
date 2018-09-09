import React, { Component } from "react";

class Home extends Component {

    // State
    state = {
        user: '',
        loggedIn: false,
    };

    // Handle functions

    render() {
        return (
            <div>
                <h1>Welcome to the Ultimate Movie App!</h1>
            </div>
        )
    }
}

export default Home;
