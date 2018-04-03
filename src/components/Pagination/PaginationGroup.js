import React from 'react';
import PropTypes from 'prop-types';

class PaginationGroup extends React.Component {
  static propTypes = {
    /**
     * PaginationLimit React element.
     */
    paginationLimit: PropTypes.node,
    /**
     * PaginationOffset React element.
     */
    paginationOffset: PropTypes.node,
  };

  render() {
    return (
      <div className="d-flex align-items-center flex-wrap">
        <div className="pr-5">
          {this.props.paginationLimit}
        </div>
        {this.props.paginationOffset}
      </div>
    );
  }
}

export default PaginationGroup;
