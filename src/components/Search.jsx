import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

class Search extends Component {
    
    constructor(props) {
        super()
        this.state = {
            movie: '',
            year: '',
            props: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
    handleSearch(event) {
        let queryUrl = `http://www.omdbapi.com/?t=${this.state.movie}&y=${this.state.year}&plot=short&apikey=trilogy`;

        
        axios.get(queryUrl).then((res) => {
            console.log(res);
        });
        this.setState({
            movie: '',
            year: '',
        });
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
                    <FontAwesomeIcon icon="search" onClick={this.handleSearch} />
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
                    <FontAwesomeIcon icon="search" onClick={this.handleSearch} />
                </form>                    
                </div>
            )
        }
    }
    
}

export default Search;