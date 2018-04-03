import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class DetailBody extends React.Component {
  render() {
    return (
      <div
        className={classNames('DetailBody d-flex p-3', {
          'flex-column': this.props.flexColumn,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

DetailBody.propTypes = {
  children: PropTypes.node,
  flexColumn: PropTypes.bool,
};

export default DetailBody;
