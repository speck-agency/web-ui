import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PageHeader = (props) => {
  return (
    <div
      className={classNames('PageHeader', props.className)}
    >
      {props.children}
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PageHeader;
