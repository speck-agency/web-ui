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
        'Tr--active': props.isActive,
        'Tr--disabled': props.isDisabled,
        'Tr--hover': props.hasHover,
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
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasHover: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tr;
