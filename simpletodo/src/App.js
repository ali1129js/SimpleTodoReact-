/**
 * @Author: Ali Ismail
 * @Date:   2018-03-30T18:55:17+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-01T13:33:00+02:00
 */
import React, { Component } from 'react';
import Form from './Components/Form';
import List from './Components/List';

import './App.css';

class App extends Component {
  state = {
    inputValue:"",
    todos: [
      {value: 'clean the room', done: false},
      {value: 'wash the car', done: true}
    ]
  }
  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      value: this.state.inputValue,
      done: false
    }
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos })
    console.log(this.state.inputValue);
  };


  render() {
    return (
      <div className="App">
      <Form
        handleChange={this.handleChange}
        inputValue={this.state.inputValue}
        handleSubmit={this.handleSubmit}
      />
      <List
      todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
