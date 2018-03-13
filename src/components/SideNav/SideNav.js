import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SideNav extends React.Component {
  static propTypes = {
    isExpanded: PropTypes.bool,
    onIsExpandedChange: PropTypes.func,
  };

  static defaultProps = {
    isExpanded: true,
    onIsExpandedChange: boolean => boolean,
  };

  handleOverlayClick = () => {
    this.props.onIsExpandedChange(!this.props.isExpanded);
  };

  handleMenuButtonClick = () => {
    this.props.onIsExpandedChange(!this.props.isExpanded);
  };

  render() {
    const menuClass = classNames('SideNav', {
      'SideNav--expanded': this.props.isExpanded,
    });

    return (
      <div className="d-block">
        <div
          className={classNames('SideNav__overlay', {
            'SideNav__overlay--visible': this.props.isExpanded,
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
