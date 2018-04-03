import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PageHeaderRight = (props) => {
  return (
    <div
      className={classNames(
        'PageHeaderRight d-flex align-items-center justify-content-lg-end text-nowrap',
        props.className
      )}
      style={{ flex: `${props.numItems} 0 auto`}}
    >
      {props.children}
    </div>
  );
};

PageHeaderRight.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Number of visible items on mobile resolutions.
   * Used to define proper flex grow, because PageHeader is divided into two sections.
   */
  numItems: PropTypes.number,
};

export default PageHeaderRight;
