import React from 'react';
import PropTypes from 'prop-types';

const PageBody = props => (
  <div className="PageBody">
    {props.children}
  </div>
);

PageBody.propTypes = {
  children: PropTypes.node,
};

export default PageBody;
