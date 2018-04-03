import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = props => (
  <div className="modal-body p-4">
    {props.children}
  </div>
);

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
