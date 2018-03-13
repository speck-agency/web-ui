import React from 'react';
import PropTypes from 'prop-types';

const ModalButtonClose = props => (
  <button
    type="button"
    className="close"
    aria-label="Close"
    onClick={props.onClick}
  >
    <span aria-hidden="true">&times;</span>
  </button>
);

ModalButtonClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalButtonClose;
