import React from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';

// React-toastify demands that custom close button is a React Component.
class ToastCloseButton extends React.Component {
  render() {
    return <i className="material-icons">clear</i>;
  }
}

class ToastFactory extends React.Component {
  static propTypes = {
    // Unique toast id.
    // Each time this prop changes, a new toast will be created with the current props.
    id: PropTypes.string,
    body: PropTypes.object,
    type: PropTypes.oneOf(['success', 'error', 'warn', 'info', 'default']),
    position: PropTypes.oneOf([
      'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'
    ]),
    autoClose: PropTypes.number,
    // A React Component to replace the default close button or false to hide the button
    closeButton: PropTypes.element,
    // Display or not the progress bar below the toast(remaining time)
    hideProgressBar: PropTypes.bool,
    // Keep the timer running or not on hover
    pauseOnHover: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    // Display newest toast on top
    newestOnTop: PropTypes.bool,
  };

  static defaultProps = {
    type: 'default',
    position: 'bottom-right',
    autoClose: 8000,
    closeButton: <ToastCloseButton />,
    hideProgressBar: true,
    pauseOnHover: true,
    closeOnClick: true,
    newestOnTop: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.createToast(nextProps);
    }
  }

  getToastFactory = (toastType) => {
    switch (toastType) {
      case 'success':
        return toast.success;

      case 'error':
        return toast.error;

      case 'warn':
        return toast.warn;

      case 'info':
        return toast.info;

      case 'default':
        return toast;

      default:
        return toast;
    }
  };

  createToast = (nextProps) => {
    const {
      body,
      type,
    } = nextProps;

    const toastFactory = this.getToastFactory(type);

    toastFactory(body);
  };

  render() {
    return (
      <ToastContainer
        position={this.props.position}
        autoClose={this.props.autoClose}
        closeButton={this.props.closeButton}
        hideProgressBar={this.props.hideProgressBar}
        pauseOnHover={this.props.pauseOnHover}
        closeOnClick={this.props.closeOnClick}
        newestOnTop={this.props.newestOnTop}
      />
    );
  }
}

export default ToastFactory;
