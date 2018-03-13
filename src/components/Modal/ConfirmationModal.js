import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Modal,
  ModalButtonClose,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from '../';

class ConfirmationModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    // Call onCancel when user clicks on the overlay?
    shouldCloseOnOverlayClick: PropTypes.bool,
    headerTitleChildren: PropTypes.node,
    bodyChildren: PropTypes.node,
    buttonCancelChildren: PropTypes.node,
    buttonConfirmChildren: PropTypes.node,
    // Handle click on buttonCancel, buttonClose or modal overlay.
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
  };

  static defaultProps = {
    shouldCloseOnOverlayClick: true,
  };

  handleOverlayClick = (e) => {
    e.stopPropagation();
    if (!this.props.shouldCloseOnOverlayClick) return;

    this.props.onCancel();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onOverlayClick={this.handleOverlayClick}
      >
        <ModalHeader>
          <ModalTitle>
            {this.props.headerTitleChildren}
          </ModalTitle>
          <ModalButtonClose onClick={this.props.onCancel} />
        </ModalHeader>
        <ModalBody>
          {this.props.bodyChildren}
        </ModalBody>
        <ModalFooter>
          <Button
            variant="default"
            onClick={this.props.onCancel}
          >
            {this.props.buttonCancelChildren}
          </Button>
          <Button
            variant="primary"
            onClick={this.props.onConfirm}
          >
            {this.props.buttonConfirmChildren}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ConfirmationModal;
