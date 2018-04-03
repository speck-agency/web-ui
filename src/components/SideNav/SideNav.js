import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SideNav extends React.Component {
  static propTypes = {
    /**
     * SideNavLinks or SideNavSection.
     */
    children: PropTypes.node,
    /**
     * Is SideNav expanded below lg breakpoint (on mobile).
     */
    expanded: PropTypes.bool,
    /**
     * Function called on menu button or overlay click.
     * First param is boolean describing the next expanded value, use it to set expanded in the parent component.
     */
    onExpandedChange: PropTypes.func,
  };

  static defaultProps = {
    expanded: true,
    onExpandedChange: boolean => boolean,
  };

  handleOverlayClick = () => {
    this.props.onExpandedChange(!this.props.expanded);
  };

  handleMenuButtonClick = () => {
    this.props.onExpandedChange(!this.props.expanded);
  };

  render() {
    const menuClass = classNames('SideNav', {
      'SideNav--expanded': this.props.expanded,
    });

    return (
      <div className="d-block">
        <div
          className={classNames('SideNav__overlay', {
            'SideNav__overlay--visible': this.props.expanded,
          })}
          onClick={this.handleOverlayClick}
        />
        <div className={menuClass}>
          <div className="SideNav__toggler">
            <i
              className="material-icons"
              onClick={this.handleMenuButtonClick}
              style={{ cursor: 'pointer' }}
            >
              menu
            </i>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SideNav;
