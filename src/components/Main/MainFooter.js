import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainFooter = props => (
  <div
    className={classNames(
      'MainFooter d-flex',
      props.children ? 'py-3' : 'pb-3',
      props.justifyContentEnd && 'justify-content-end',
    )}
  >
    {props.children}
  </div>
);

MainFooter.propTypes = {
  children: PropTypes.node,
  /**
   * TODO: Luka - create shared logic for layout components
   * @ignore
   */
  justifyContentEnd: PropTypes.bool,
};

MainFooter.defaultProps = {
  justifyContentEnd: false,
};

export default MainFooter;
