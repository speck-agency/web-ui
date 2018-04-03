import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const getSizeClass = () => {
    switch (props.size) {
      case 'small':
        return 'btn-sm';
      case 'medium':
        return 'btn-md';
      default:
        return props.size;
    }
  };

  const getVariantClass = () => {
    const variant = props.variant === 'outline' ? 'outline-' : '';

    return `btn-${variant}${props.color}`
  };

  const handleClick = e => props.onClick && props.onClick(e);

  return (
    <button
      className={classNames('btn', getSizeClass(), getVariantClass(), {
        disabled: props.disabled,
      })}
      onClick={handleClick}
      title={props.title}
    >
      {props.children}
    </button>
  );
};

/**
 * General buttons.
 */
Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'default',
    'outline',
  ]),
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
  ]),
  /**
   * Disabled button has normal cursor and is faded.
   */
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  /**
   * Title that is shown on hover.
   */
  title: PropTypes.string,
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium',
  color: 'primary',
  disabled: false,
};

export default Button;
