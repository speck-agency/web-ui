import React from 'react';

class DetailHeaderLeft extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        {this.props.children}
      </div>
    );
  }
}

export default DetailHeaderLeft;
