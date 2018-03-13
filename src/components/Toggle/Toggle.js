import React from 'react';
import ReactToggle from 'react-toggle';

const Toggle = (props) => {
  const {
    children,
    ...rest
  } = props;

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
      {...rest}
    >
      {children}
    </ReactToggle>
  );
};

export default Toggle;
