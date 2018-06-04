import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Goals from "./Components/Goals";
import reactbootstrap from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        </header>
        <p className="App-intro">
          To get started enter your daily water goal below.
        </p>
        <div>
          <Goals />
        </div>
      </div>
    );
  }
}

export default App;
