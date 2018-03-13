import React from 'react';
import classNames from 'classnames';

class Detail extends React.Component {
  render() {
    return (
      <div
        className={classNames('Detail card p-3', {
          'Detail--expanded': this.props.isExpanded,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Detail;
