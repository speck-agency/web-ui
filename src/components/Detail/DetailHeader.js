import React from 'react';
import classNames from 'classnames';

class DetailHeader extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center flex-wrap">
        {this.props.children}
      </div>
    );
  }
}

export default DetailHeader;
