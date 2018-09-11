import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {
    
    constructor(props) {
        super()
        this.state = {
            movie: '',
            year: '',
            props: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

    render() {
        if (this.props.user) {
            return (
                <div className="Search">
                    {/* <p>Current User:</p>
                    <p>{this.props.user.local.username}</p> */}
                <form>
                    <input
                    type="text"
                    name="movie"
                    value={this.state.movie}
                    onChange={this.handleChange}
                    />
                    {" "}
                    <FontAwesomeIcon icon="search" />
                </form>
                </div>
            )
        } else {
            return (
                <div className="Search">
                    <form>
                    <input
                    type="text"
                    name="movie"
                    value={this.state.movie}
                    onChange={this.handleChange}
                    />
                    {" "}
                    <FontAwesomeIcon icon="search" />
                </form>                    
                </div>
            )
        }
    }
    
}

export default Search;