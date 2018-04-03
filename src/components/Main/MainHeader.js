import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainHeader = (props) => {
  const {
    children,
    paddingTopNone,
  } = props;

  // TODO: Luka - this is not good way to do this. Main should have custom padding prop.
  const getPaddingTopClassName = () => {
    if (paddingTopNone) return '';
    if (children) return 'pt-4';
    return 'pt-3';
  };

  const getPaddingBottomClassName = () => {
    if (children) return 'pb-4';
    return 'pb-3';
  };

  return (
    <div
      className={classNames(
        'MainHeader d-flex flex-wrap align-items-center',
        getPaddingTopClassName(),
        getPaddingBottomClassName(),
      )}
    >
      {children}
    </div>
  );
};

MainHeader.propTypes = {
  children: PropTypes.node,
};

export default MainHeader;
