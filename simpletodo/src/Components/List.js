/**
 * @Author: Ali Ismail
 * @Date:   2018-03-30T23:43:24+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-01T13:01:25+02:00
 */
import React, { Component } from 'react';
import Task from './Task';

class List extends Component {

  render(){
    return (
      <div className="List">
        {this.props.todos.map((todo, index) => {
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
