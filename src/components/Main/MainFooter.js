import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainFooter = props => (
  <div
    className={classNames(
      'MainFooter flex-0-0-auto d-flex',
      props.children ? 'py-3' : 'pb-3',
      props.justifyContentEnd && 'justify-content-end',
    )}
  >
    {props.children}
  </div>
);

MainFooter.propTypes = {
  children: PropTypes.object,
  // justifyContentEnd: PropTypes.bool,
};

MainFooter.defaultProps = {
  children: undefined,
  // justifyContentEnd: false,
};

export default MainFooter;
