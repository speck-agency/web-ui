import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = props => (
  <div className="modal-header px-4 py-3">
    {props.children}
  </div>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
};

export default ModalHeader;
