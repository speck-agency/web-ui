import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = (props) => {
  const {
    className,
    title,
    name,
    ...rest
  } = props;

  return (
    <span
      className={classNames('material-icons', className)}
      title={title}
      {...rest}
    >
      {name}
    </span>
  );
};

Icon.propTypes = {
  /**
   *  Google Material Icon name.
   */
  name: PropTypes.string.isRequired,
  /**
   *  On hover title.
   */
  title: PropTypes.string,
  /**
   * Concatenated to our className.
   */
  className: PropTypes.string,
};

Icon.defaultProps = {};

export default Icon;
