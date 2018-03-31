/**
 * @Author: Ali Ismail
 * @Date:   2018-03-30T18:55:17+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-03-31T14:34:53+02:00
 */
import React, { Component } from 'react';
import Form from './Components/Form';
import List from './Components/List';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Form />
      <List />
      </div>
    );
  }
}

export default App;
