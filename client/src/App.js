import React, { Component } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Login/>
      </div>
    );
  }
}

export default App;
