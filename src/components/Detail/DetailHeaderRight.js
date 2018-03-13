import React from 'react';
import classNames from 'classnames';

class DetailHeaderRight extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-end  ml-auto">
        {this.props.children}
      </div>
    );
  }
}

export default DetailHeaderRight;
