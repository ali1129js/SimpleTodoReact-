/**
 * @Author: Ali Ismail
 * @Date:   2018-03-30T23:43:05+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-03-31T14:32:39+02:00
 */
import React, { Component } from 'react';
class Form extends Component {
  state = {
    inputValue:""
  }

handleChange = (e) => {
    console.log(e.target.value);
    this.setState({inputValue:e.target.value});

  }

  render() {
    return (
      <div className="Form">
      <form>
      <input
        value={this.state.inputValue}
        onChange={(e)=>this.handleChange(e)}
         />
      </form>
      </div>
    )
  }
}
export default Form;
