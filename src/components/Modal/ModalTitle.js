import React from 'react';
import PropTypes from 'prop-types';

const ModalTitle = props => (
  <h5 className="modal-title">
    {props.children}
  </h5>
);

ModalTitle.propTypes = {
  children: PropTypes.node,
};

export default ModalTitle;
