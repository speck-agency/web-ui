import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const getSizeClass = () => {
    switch (props.size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      default:
        return props.size;
    }
  };

  const getVariantClass = () => {
    switch (props.variant) {
      case 'default':
        return 'Button-default';
      case 'primary':
        return 'Button-primary';
      case 'secondary':
        return 'Button-secondary';
      case 'success':
        return 'Button-success';
      case 'danger':
        return 'Button-danger';
      case 'outline-primary':
        return 'Button-outline-primary';
      case 'outline-secondary':
        return 'Button-outline-secondary';
      default:
        return props.variant;
    }
  };

  const handleClick = e => props.onClick && props.onClick(e);

  return (
    <button
      className={classNames('btn', getSizeClass(), getVariantClass(), {
        active: props.isActive,
        disabled: props.isDisabled,
      })}
      onClick={handleClick}
      style={{
        // TODO: Define via CSS
        cursor: props.isDisabled ? 'not-allowed' : undefined,
      }}
      title={props.title}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  // Follows Bootstrap convention.
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
    'outline-primary',
    'outline-secondary',
  ]),
  // Follows Bootstrap convention.
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  // isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

Button.defaultProps = {
  variant: 'default',
  isActive: false,
  isDisabled: false,
};

export default Button;
