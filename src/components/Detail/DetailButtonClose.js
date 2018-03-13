import React from 'react';

class DetailButtonClose extends React.Component {
  render() {
    return (
      <button
        className="material-icons close p-2"
        style={{ cursor: 'pointer' }}
        aria-label="Close"
        onClick={this.props.onClick}
      >
        arrow_back
      </button>
    );
  }
}

export default DetailButtonClose;
