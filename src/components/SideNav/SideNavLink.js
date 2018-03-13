import React from 'react';
import classNames from 'classnames';

const SideNavLink = (props) => {
  return (
    <div
      className={classNames('SideNavLink', {
        'SideNavLink--active': props.isActive,
      })}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default SideNavLink;
