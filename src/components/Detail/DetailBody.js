import React from 'react';
import classNames from 'classnames';

class DetailBody extends React.Component {
  render() {
    return (
      <div
        className={classNames('d-flex flex-1-0-auto', {})}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DetailBody;
