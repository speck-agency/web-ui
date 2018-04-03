```jsx
<PaginationGroup
  paginationLimit={<PaginationLimit />}
  paginationOffset={<PaginationOffset />}
/>
```

Example of PaginationGroup container in VPS app:

```jsx static
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';

import {
  PaginationGroup,
  PaginationLimit,
  PaginationOffset,
} from 'saas-ui';

import * as qs from '../../util/qs';

const numberOrStringType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

class PaginationGroupContainer extends React.Component {
  static propTypes = {
    page: PropTypes.shape({
      count: numberOrStringType,
      limit: numberOrStringType,
      offset: numberOrStringType,
    }),
    shouldSetUrlQuery: PropTypes.bool,
    // This 2 methods will only be called if they are defined.
    // Useful when we want to hold pagination state outside of url query, e.g. in redux.
    // Set shouldSetUrlQuery to false to disable url mutation.
    onLimitChange: PropTypes.func,
    onOffsetChange: PropTypes.func,
  };

  static defaultProps = {
    page: {
      count: '',
      limit: '',
      offset: '',
    },
    shouldSetUrlQuery: true,
  };

  setUrlQuery = ({ limit, offset }) => {
    const nextPage = {
      limit,
      offset,
    };

    const prevUrlQuery = qs.parseQueryString(this.props.location.search);
    const nextUrlQuery = qs.io.setPage(nextPage)(prevUrlQuery);

    this.props.history.push({
      search: qs.stringifyQuery(nextUrlQuery),
    });
  };

  handleLimitChange = ({ limit }) => {
    if (this.props.onLimitChange) {
      this.props.onLimitChange({
        limit,
        // Reset offset on limit change.
        offset: 0,
      });
    }

    if (this.props.shouldSetUrlQuery) {
      this.setUrlQuery({
        limit,
        // Reset offset on limit change.
        offset: 0,
      });
    }
  };

  handleOffsetChange = ({ offset }) => {
    if (this.props.onOffsetChange) {
      this.props.onOffsetChange({ offset });
    }

    if (this.props.shouldSetUrlQuery) {
      this.setUrlQuery({ offset });
    }
  };

  render() {
    return (
      <PaginationGroup
        paginationLimit={
          <PaginationLimit
            limit={this.props.page.limit}
            limitOptions={[10, 20, 50, 100]}
            rowsPerPageLabel={<FormattedMessage id="Pagination.rowsPerPage" />}
            onChange={this.handleLimitChange}
          />
        }
        paginationOffset={
          <PaginationOffset
            count={this.props.page.count}
            limit={this.props.page.limit}
            offset={this.props.page.offset}
            offsetOfCountLabel={<FormattedMessage id="Pagination.of" />}
            onChange={this.handleOffsetChange}
          />
        }
      />
    );
  }
}

export default withRouter(PaginationGroupContainer);
```