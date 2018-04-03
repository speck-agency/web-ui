import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from '../';

const PlainLink = (props) => {
  const { activeClassName, ...rest } = props;

  return (
    <a {...rest} />
  );
};

const PageHeaderLink = (props) => {
  const {
    linkComponent,
    linkProps,
    text,
    iconName,
    disabled,
  } = props;

  const {
    className,
    activeClassName,
    ...otherLinkProps
  } = linkProps;

  return (
    <props.linkComponent
      className={classNames('PageHeaderLink p-xs-2 mx-lg-3 my-lg-2 py-lg-1', className, {
        'PageHeaderLink--disabled': disabled,
      })}
      activeClassName={
        linkProps.href ? undefined : classNames('PageHeaderLink--active', activeClassName)
      }
      {...otherLinkProps}
    >
      <div className="d-flex flex-column align-items-center">
        {iconName &&
          <Icon name={iconName} />
        }
        {text &&
          <span
            className={classNames('PageHeaderLink__text', {
              'PageHeaderLink__text--with-icon': iconName,
            })}
          >
            {text}
          </span>
        }
      </div>
    </props.linkComponent>
  );
};

PageHeaderLink.propTypes = {
  /**
   * React Component used for rendering link.
   */
  linkComponent: PropTypes.func,
  /**
   * Props that will be passed to linkComponent.
   */
  linkProps: PropTypes.object,
  /**
   * Label text. Will be hidden on mobile if icon is defined.
   */
  text: PropTypes.node,
  /**
   * Label material icon.
   */
  iconName: PropTypes.string,
  /**
   * Has normal cursor and is faded.
   */
  disabled: PropTypes.bool,
};

PageHeaderLink.defaultProps = {
  linkComponent: PlainLink,
  linkProps: {
    className: '',
    activeClassName: '',
  },
  disabled: false,
};

export default PageHeaderLink;
