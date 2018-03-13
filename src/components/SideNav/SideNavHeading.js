import React from 'react';

const SideNavHeading = (props) => {
  return (
    <div className="text-muted text-uppercase small px-2 pt-3">
      {props.children}
      <hr className="mt-1 mb-0" />
    </div>
  );
};

export default SideNavHeading;
