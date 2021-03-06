import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							<FontAwesomeIcon icon="home" />
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
						<FontAwesomeIcon icon="sign-out-alt" />
						</Link>
					</li>
					<li className="nav-item">
						{/* <Search user={props} /> */}
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
						<FontAwesomeIcon icon="home" />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							<FontAwesomeIcon icon="user" />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							<FontAwesomeIcon icon="user-plus" />
						</Link>
					</li>
					<li className="nav-item">
						{/* <Search user={props}/> */}
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false,
			user: null,
			test: this.props,
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}


	render() {
		return (
			<div className="App">
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" render={() => <Home user={this.state.user} />} />
				{/* <Route exact path="/search" render={() => <Search user={this.state.user} />} /> */}
				<Route exact path="/search" render={() => <Search user={this.state.user} />}  />
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} />
				{/* <LoginForm _login={this._login} /> */}	
				<Search user={this.state.user} />
			</div>
		)
	}
}

export default App
