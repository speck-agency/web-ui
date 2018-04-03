import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = (props) => {
  return (
    <a
      className={classNames({
        'Link': true,
        ...props.className,
      })}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.any,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  href: '#',
};

export default Link;
