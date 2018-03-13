import React from 'react';
import PropTypes from 'prop-types';

const MainBody = props => (
  <div className="MainBody flex-1-1-auto d-flex">
    {props.column ? (
      <div className="w-100 d-flex flex-column">
        {props.children}
      </div>
    ) : (
      props.children
    )}
  </div>
);

MainBody.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']),
};

MainBody.defaultProps = {
  direction: 'row',
};

export default MainBody;
