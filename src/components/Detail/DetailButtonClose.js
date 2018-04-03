import React from 'react';
import PropTypes from 'prop-types';

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

DetailButtonClose.propTypes = {
  onClick: PropTypes.func,
};

export default DetailButtonClose;
