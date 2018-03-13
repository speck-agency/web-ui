import React from 'react';
import classNames from 'classnames';

const MainHeader = (props) => {
  const {
    children,
    paddingTopNone,
  } = props;

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
        'MainHeader flex-0-0-auto d-flex flex-wrap align-items-center',
        getPaddingTopClassName(),
        getPaddingBottomClassName(),
      )}
    >
      {children}
    </div>
  );
};

export default MainHeader;
