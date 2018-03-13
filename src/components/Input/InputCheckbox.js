import React from 'react';
import uuid from 'uuid/v4';

class InputCheckbox extends React.Component {
  state = {
    inputId: uuid(),
  };

  render() {
    const {
      checked,
      onChange,
      disabled,
      readOnly,
    } = this.props;

    return (
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id={this.state.inputId}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
        />
        <label
          className="custom-control-label"
          htmlFor={this.state.inputId}
          // label is used to control checkbox input
        />
      </div>
    );
  }
}

export default InputCheckbox;
