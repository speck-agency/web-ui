import React from 'react';
import uuid from 'uuid/v4';

class InputRadio extends React.Component {
  state = {
    inputId: uuid(),
  };

  render() {
    const {
      name,
      checked,
      onChange,
      disabled,
      readOnly,
    } = this.props;

    return (
      <div
        className="custom-control custom-radio"
        style={{ display: 'inline-block' }}
      >
        <input
          type="radio"
          id={this.state.inputId}
          className="custom-control-input"
          name={name}
          disabled={disabled}
          readOnly={readOnly}
          onChange={onChange}
          checked={checked}
          onClick={e => e.stopPropagation()}
        />
        <label
          className="custom-control-label"
          htmlFor={this.state.inputId}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </div>
    );
  }
}

export default InputRadio;
