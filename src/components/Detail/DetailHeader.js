import React from 'react';
import PropTypes from 'prop-types';

const DetailHeader = (props) => {
  return (
    <div className="d-flex align-items-center flex-wrap">
      {props.children}
    </div>
  );
};

DetailHeader.propTypes = {
  children: PropTypes.node,
};

export default DetailHeader;
