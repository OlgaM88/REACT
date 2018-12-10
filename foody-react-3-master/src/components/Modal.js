import React, { Component, createRef } from 'react';

export default class Modal extends Component {
  innerRef = createRef();

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('click', this.handleOutsideClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalWindowOpen } = this.props;
    return nextState.isModalWindowOpen !== isModalWindowOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleKeyUp = evt => {
    evt.preventDefault();
    const { onClose } = this.props;
    if (evt.keyCode === 27) {
      onClose();
    }
  };

  handleOutsideClick = evt => {
    if (evt.target !== this.innerRef) {
      const { onClose } = this.props;
      onClose();
    }
  };
  /*
    if (isModalWindowOpen && !isTargetOutsideContainer) {
    */

  render() {
    const { children, onClose } = this.props;
    return (
      <div className="Backdrop" ref={this.innerRef}>
        <div className="ModalWindow">
          <div className="ModalContent">{children}</div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
