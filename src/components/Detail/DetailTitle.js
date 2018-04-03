import React from 'react';
import PropTypes from 'prop-types';

const DetailTitle = (props) => {
  return (
    <h5 className="DetailTitle p-2 m-0">
      {props.children}
    </h5>
  );
};

DetailTitle.propTypes = {
  children: PropTypes.node,
};

export default DetailTitle;
