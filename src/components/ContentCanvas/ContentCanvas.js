import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper for Main.
 * Will probably be deprecated so that only Main will be used.
 */
const ContentCanvas = props => (
  <div className="ContentCanvas">
    {props.children}
  </div>
);

ContentCanvas.propTypes = {
  children: PropTypes.node,
};

export default ContentCanvas;
