PageHeader components are responsive by default.

That means that they will behave differently below lg resolutions (mobile) and differently above md resolutions (desktop).

On mobile resolutions items are transformed into equally stretched buttons, with either icon, or text if icon is not defined.

You can also create multiple menus and hide/show them at different resolutions.

For example, in the VPS app we have:

```jsx static
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import {
  PageHeader,
  PageHeaderLeft,
  PageHeaderRight,
} from '@speck-agency/web-ui';

import PageHeaderLink from '../Page/PageHeaderLink';

import mkpLinks from '../../../_custom/const/mkp-links';
import rootedLinks from '../../util/rootedLinks';
import ProvisionSync from '../Provision/ProvisionSync';

import * as sideNavSelectors from '../../reducers/shared/components/SideNav';
import * as sideNavActions from '../../actions/shared/SideNav.actions';

class UserAdminHeader extends React.Component {
  static propTypes = {
    currentUserFullName: PropTypes.string.isRequired,
    sideNavState: PropTypes.object.isRequired,
    toggleSideNav: PropTypes.func.isRequired,
  };

  render() {
    return (
      <React.Fragment>
        {/* Hidden at mobile resolutions */}
        <PageHeader className="d-none d-lg-flex">
          <PageHeaderLeft>
            <PageHeaderLink
              linkProps={{ to: '/servers' }}
              text={<FormattedMessage id="PageHeader.servers" />}
            />
            <PageHeaderLink
              linkProps={{ to: '/resources' }}
              text={<FormattedMessage id="PageHeader.resources" />}
            />
            <PageHeaderLink
              linkProps={{
                to: '/',
                exact: true,
              }}
              text={<FormattedMessage id="PageHeader.statistics" />}
            />
            <PageHeaderLink
              linkProps={{ to: '/support' }}
              text={<FormattedMessage id="PageHeader.support" />}
            />
          </PageHeaderLeft>

          <PageHeaderRight>
            <ProvisionSync />
            <span
              className="text-muted py-2 pl-2 pr-4"
              style={{ fontWeight: 300 }}
            >
              {this.props.currentUserFullName}
            </span>
            <PageHeaderLink
              linkProps={{ href: mkpLinks.home }}
              text={<FormattedMessage id="PageHeader.marketplace" />}
              iconName="arrow_back"
            />
            <PageHeaderLink
              linkProps={{
                to: '/user-settings',
                exact: true,
              }}
              text={<FormattedMessage id="PageHeader.settings" />}
              iconName="settings"
            />
            <PageHeaderLink
              linkProps={{ href: rootedLinks.logout }}
              text={<FormattedMessage id="PageHeader.logout" />}
              iconName="power_settings_new"
            />
          </PageHeaderRight>
        </PageHeader>

        {/* Hidden at desktop resolutions */}
        <PageHeader className="d-flex d-lg-none">
          <PageHeaderLink
            linkProps={{
              href: '#',
              onClick: (e) => {
                e.preventDefault();
                this.props.toggleSideNav();
              },
            }}
            iconName="menu"
            disabled={!this.props.sideNavState.exists}
          />
          <PageHeaderLink
            linkProps={{ to: '/servers' }}
            iconName="computer"
          />
          <PageHeaderLink
            linkProps={{ to: '/resources' }}
            iconName="developer_board"
          />
          <PageHeaderLink
            linkProps={{
              to: '/',
              exact: true,
            }}
            iconName="show_chart"
          />
          <PageHeaderLink
            linkProps={{ to: '/support' }}
            iconName="help"
          />
          <PageHeaderLink
            linkProps={{ to: '/user-settings' }}
            iconName="account_circle"
          />
        </PageHeader>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { currentUser } = state;

  return {
    currentUserFullName: `${currentUser.firstName} ${currentUser.lastName}`,
    sideNavState: sideNavSelectors.getState(state),
  };
}

function mergeProps(stateProps, { dispatch }, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    toggleSideNav: () => {
      const {
        exists,
        isExpanded,
      } = stateProps.sideNavState;

      if (!exists) return;

      dispatch(sideNavActions.setIsExpandedSideNav(!isExpanded));
    },
  };
}

export default withRouter(connect(mapStateToProps, null, mergeProps)(UserAdminHeader));
```

So instead of toggling visibility of particular items, we've just created another, mobile menu.
