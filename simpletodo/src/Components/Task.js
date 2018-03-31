/**
 * @Author: Ali Ismail
 * @Date:   2018-03-31T11:02:15+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-03-31T15:37:05+02:00
 */
 import React, { Component } from 'react';
 class Task extends Component {
   render() {
     return (
       <div className="Task">
       <span>{this.props.todo.value}</span>
       </div>
     )
   }
 }
 export default Task;
