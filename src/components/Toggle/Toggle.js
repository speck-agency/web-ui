import React from 'react';
import PropTypes from 'prop-types';
import ReactToggle from 'react-toggle';

const Toggle = (props) => {
  const checkedIcon = (
    <i
      className="material-icons"
      style={{
        color: '#fff',
        fontSize: 16,
      }}
    >
      done
    </i>
  );

  const uncheckedIcon = (
    <i
      className="material-icons"
      style={{
        color: '#fff',
        fontSize: 16,
      }}
    >
      clear
    </i>
  );

  return (
    <ReactToggle
      className=""
      icons={{
        checked: checkedIcon,
        unchecked: uncheckedIcon,
      }}
      {...props}
    />
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Toggle;
