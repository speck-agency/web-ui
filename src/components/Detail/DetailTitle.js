import React from 'react';

class DetailTitle extends React.Component {
  render() {
    return (
      <h5 className="DetailTitle p-2 m-0">
        {this.props.children}
      </h5>
    );
  }
}

export default DetailTitle;
