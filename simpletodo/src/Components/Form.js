/**
 * @Author: Ali Ismail
 * @Date:   2018-03-30T23:43:05+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-01T13:17:05+02:00
 */
import React, { Component } from 'react';
class Form extends Component {

  render() {
    return (
      <div className="Form">
      <form onSubmit={(e) => this.props.handleSubmit(e)}>
      <input
        value={this.props.inputValue}
        onChange={(e)=>this.props.handleChange(e)}
         />
      </form>
      </div>
    )
  }
}
export default Form;
