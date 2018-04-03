import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = props => (
  <div className="modal-footer justify-content-between px-4 py-3">
    {props.children}
  </div>
);

ModalFooter.propTypes = {
  children: PropTypes.node,
};

export default ModalFooter;
