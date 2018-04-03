import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Page = props => {
  const {
    className,
    ...rest
  } = props;

  return (
    <div
      className={classNames('Page', className)}
      {...rest}
    >
      {props.children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Page;
