import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Used for displaying a single item. Either selected in a master table or on its own.
 */
const Detail = (props) => {
  return (
    <div
      className={classNames('Detail card p-3')}
    >
      {props.children}
    </div>
  );
};

Detail.propTypes = {
  children: PropTypes.node,
};

export default Detail;
