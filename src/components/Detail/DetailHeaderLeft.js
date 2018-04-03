import React from 'react';
import PropTypes from 'prop-types';

const DetailHeaderLeft = (props) => {
  return (
    <div className="d-flex align-items-center">
      {props.children}
    </div>
  );
};

DetailHeaderLeft.propTypes = {
  children: PropTypes.node,
};

export default DetailHeaderLeft;
