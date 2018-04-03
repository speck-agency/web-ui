import React from 'react';
import PropTypes from 'prop-types';

const MainTitle = (props) => (
  <div
    className="MainTitle h4 m-0 pr-3"
    style={{ fontWeight: 400 }}
  >
    {props.children}
  </div>
);

MainTitle.propTypes = {
  children: PropTypes.node,
};

export default MainTitle;
