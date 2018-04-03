import React from 'react';
import { Toggle } from '../';

class ToggleExample extends React.Component {
  state = 0;

  handleChange = (e) => {
    this.setState(() => e.target.value);
  };

  render() {
    return (
      <Toggle
        value={this.state}
        onChange={this.handleChange}
      />
    );
  }
}

export default ToggleExample;
