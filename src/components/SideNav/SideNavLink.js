import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PlainLink = (props) => {
  const { activeClassName, ...rest } = props;

  return (
    <a {...rest} />
  );
};

const SideNavLink = (props) => {
  const {
    linkComponent,
    linkProps,
  } = props;

  const {
    className,
    activeClassName,
    ...otherLinkProps
  } = linkProps;

  return (
    <props.linkComponent
      className={classNames('SideNavLink', className)}
      activeClassName={
        linkProps.href ? undefined : classNames('SideNavLink--active', activeClassName)
      }
      {...otherLinkProps}
    >
      {props.children}
    </props.linkComponent>
  );
};

SideNavLink.propTypes = {
  children: PropTypes.node,
  /**
   * Component used for rendering link.
   */
  linkComponent: PropTypes.func,
  /**
   * Props that will be passed to linkComponent.
   */
  linkProps: PropTypes.object,
};

SideNavLink.defaultProps = {
  linkComponent: PlainLink,
  linkProps: {
    className: '',
    activeClassName: '',
  },
};

export default SideNavLink;
