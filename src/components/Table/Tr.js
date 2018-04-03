import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tr = (props) => {
  const getCursor = () => {
    if (props.onClick) return 'pointer';

    return 'default';
  };

  return (
    <tr
      className={classNames('Tr', {
        'Tr--active': props.active,
        'Tr--disabled': props.disabled,
        'Tr--hover': props.hover,
      })}
      onClick={props.onClick}
      style={{
        cursor: getCursor(),
      }}
    >
      {props.children}
    </tr>
  );
};

Tr.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tr;
