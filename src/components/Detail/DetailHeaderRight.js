import React from 'react';
import PropTypes from 'prop-types';

const DetailHeaderRight = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-end  ml-auto">
      {props.children}
    </div>
  );
};

DetailHeaderRight.propTypes = {
  children: PropTypes.node,
};

export default DetailHeaderRight;
