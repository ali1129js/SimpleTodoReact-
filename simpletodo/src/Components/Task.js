/**
 * @Author: Ali Ismail
 * @Date:   2018-03-31T11:02:15+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-01T12:31:04+02:00
 */
 import React, { Component } from 'react';
 class Task extends Component {
   render() {
     return (
       <div className="Task">
       <span
         style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none'}}>
         {this.props.todo.value}
       </span>
       <button>{this.props.todo.done ? 'undo' : 'Complete'}</button>>
       </div>
     )
   }
 }
 export default Task;
