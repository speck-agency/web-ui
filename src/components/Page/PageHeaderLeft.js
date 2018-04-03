import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PageHeaderLeft = (props) => {
  return (
    <div
      className={classNames(
        'PageHeaderLeft d-flex align-items-center',
        props.className
      )}
      style={{ flex: `${props.numItems} 0 auto`}}
    >
      {props.children}
    </div>
  );
};

PageHeaderLeft.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Number of visible items on mobile resolutions.
   * Used to define proper flex grow, because PageHeader is divided into two sections.
   */
  numItems: PropTypes.number,
};

export default PageHeaderLeft;
