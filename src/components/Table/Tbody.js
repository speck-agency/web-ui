import React from 'react';
import PropTypes from 'prop-types';

const Tbody = props => (
  <tbody>
    {props.children}
  </tbody>
);

Tbody.propTypes = {
  children: PropTypes.node,
};

export default Tbody;
