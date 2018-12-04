import React, { Component, createRef } from 'react';

export default class Modal extends Component {
  innerRef = createRef();

  componentWillMount() {
    window.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('click', this.handleOutsideClick);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('click', this.handleOutsideClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalWindowOpen } = this.state;
    return nextState.isModalWindowOpen !== isModalWindowOpen;
  }

  handleKeyUp = evt => {
    evt.preventDefault();
    const { onClose } = this.props;
    if (evt.keyCode === 27) {
      onClose();
    }
  };

  handleOutsideClick = evt => {
    evt.preventDefault();
    const isTargetOutsideContainer = this.innerRef.current.contains(evt.target);
    const { onClose } = this.props;
    if (!isTargetOutsideContainer) {
      onClose();
    }
  };

  render() {
    const { onClose, children } = this.props;
    return (
      <div className="Backdrop">
        <div className="ModalWindow" ref={this.innerRef}>
          <div className="ModalContent">{children}</div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
