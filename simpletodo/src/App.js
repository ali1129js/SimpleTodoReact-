/**
 * @Author: Ali Ismail
 * @Date:   2018-03-30T18:55:17+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-03-30T18:59:19+02:00
 */



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Simple Todo</h1>
        </header>
      </div>
    );
  }
}

export default App;
