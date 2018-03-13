import React from 'react';
import classNames from 'classnames';

class DetailFooter extends React.Component {
  render() {
    return (
      <div
        className={classNames('d-flex flex-0-0-auto', {})}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DetailFooter;
