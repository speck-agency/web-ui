import React from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';

// React-toastify demands that custom close button is a React Component.
class ToastCloseButton extends React.Component {
  render() {
    return <i className="material-icons">clear</i>;
  }
}

/**
 * Wrapper for [react-toastify](https://fkhadra.github.io/react-toastify/) library that will
 * dispatch new toast on each id prop change.
 *
 * Default props are the ones used in the VPS app, so for each toast you only need to define
 * id, body and type.
 *
 * In the VPS app we've connected ToastFactory to redux so we can dispatch toasts with actions.
 *
 * But if this pattern doesn't suit you, use react-toastify directly or some other libary :)
 */
class ToastFactory extends React.Component {
  static propTypes = {
    /**
     * Unique toast id.
     * Each time this prop changes, a new toast will be created with the current props.
     */
    id: PropTypes.string,
    body: PropTypes.object,
    type: PropTypes.oneOf(['success', 'error', 'warn', 'info', 'default']),
    position: PropTypes.oneOf([
      'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'
    ]),
    /**
     * How long the toast will be visible.
     */
    autoClose: PropTypes.number,
    /**
     * Display or not the progress bar below the toast(remaining time).
     */
    hideProgressBar: PropTypes.bool,
    /**
     * Keep the timer running or not on hover.
     */
    pauseOnHover: PropTypes.bool,
    /**
     * Immediately close toast on click.
     */
    closeOnClick: PropTypes.bool,
    /**
     * Display newest toast on top.
     */
    newestOnTop: PropTypes.bool,
  };

  static defaultProps = {
    type: 'default',
    position: 'bottom-right',
    autoClose: 8000,
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
        closeButton={<ToastCloseButton />}
        hideProgressBar={this.props.hideProgressBar}
        pauseOnHover={this.props.pauseOnHover}
        closeOnClick={this.props.closeOnClick}
        newestOnTop={this.props.newestOnTop}
      />
    );
  }
}

export default ToastFactory;
