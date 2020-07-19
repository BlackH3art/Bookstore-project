import React, { Component } from 'react';

export class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `component-input-${this.props.label}`
    }
  }

  render() { 

    const {label, state, setState, type = "text"} = this.props;

    return ( 
      <>
        <label htmlFor={this.state.id}>
          {label}
          <input 
            id={this.state.id}
            type={type}
            value={state} 
            placeholder="" 
            onChange={e => setState(e.target.value)}
          />
        </label>
        <br/>
      </>
     );
  }
}
 