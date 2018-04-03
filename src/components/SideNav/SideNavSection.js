import React from 'react';
import PropTypes from 'prop-types';

const SideNavSection = (props) => {
  return (
    <div className="d-flex flex-column py-2">
      {props.children}
    </div>
  );
};

SideNavSection.propTypes = {
  children: PropTypes.node,
};

export default SideNavSection;
