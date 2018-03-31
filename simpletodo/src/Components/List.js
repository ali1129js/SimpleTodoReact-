/**
 * @Author: Ali Ismail
 * @Date:   2018-03-30T23:43:24+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-03-31T15:33:21+02:00
 */
import React, { Component } from 'react';
import Task from './Task';

class List extends Component {

  state = {
    todos: [
      {value: 'clean the room', done: false},
      {value: 'wash the car', done: true}
    ]
  }
  render(){
    return (
      <div className="List">
        {this.state.todos.map((todo, index) => {
          return (
          <Task
            key={index}
            todo={todo}
          />
          )
        })}
      </div>
    )
  }
}
export default List;
