import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// From bootstrap src
// .modal-open      - body class for killing the scroll
// .modal           - container to scroll within
// .modal-dialog    - positioning shell for the actual modal
// .modal-content   - actual modal w/ bg and corners and stuff

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    // By default nothing happens and click propagation is stopped. Can be used to close the modal.
    onOverlayClick: PropTypes.func,
  };

  static defaultProps = {
    onOverlayClick: e => e.stopPropagation(),
  };

  render() {
    return (
      <div>
        {this.props.isOpen && (
          <div
            className="modal-backdrop fade show"
          />
        )}
        <div
          className={classNames('modal fade', {
            show: this.props.isOpen,
          })}
          style={{
            display: this.props.isOpen ? 'block' : 'none',
            overflowY: 'auto',
          }}
          onClick={this.props.onOverlayClick}
        >
          <div
            className="modal-dialog"
            role="document"
          >
            <div
              className="modal-content"
              // Prevent onOverlayClick()
              onClick={e => e.stopPropagation()}
            >
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
