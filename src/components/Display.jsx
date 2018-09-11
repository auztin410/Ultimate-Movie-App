import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: ''
        }
    }

    render() {
        return(
            <div>
                <h1>This is the display area.</h1>
            </div>
        )
    }
}

export default Display;