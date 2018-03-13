import React from 'react';

const SideNavSection = (props) => {
  return (
    <div className="d-flex flex-column py-2">
      {props.children}
    </div>
  );
};

export default SideNavSection;
