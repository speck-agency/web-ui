import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DetailFooter = (props) => {
  return (
    <div
      className={classNames('DetailFooter d-flex')}
    >
      {props.children}
    </div>
  );
};

DetailFooter.propTypes = {
  children: PropTypes.node,
};

export default DetailFooter;
