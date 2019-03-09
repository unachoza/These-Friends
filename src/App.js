import React, { Component } from 'react';
import logo from './logo.svg';
import Hello from './Hello'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>These Friends</h1>
        <Hello/>
      </div>
    );
  }
}

export default App;
