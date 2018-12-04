import React, { Component, createRef } from 'react';
import DropDown from './DropDown';

import Avatar from './Avatar';
import userImage from './user-image.jpg';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentWillMount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = evt => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      evt.target,
    );

    const { isDropDownOpen } = this.state;
    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState(state => ({
      isDropDownOpen: true,
    }));
  };

  closeDropdown = () => {
    this.setState(state => ({
      isDropDownOpen: false,
    }));
  };

  componentShouldUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  render() {
    const { isDropDownOpen } = this.state;
    return (
      <div
        className="UserMenu"
        onClick={this.openDropdown}
        onKeyDown={this.openDropdown}
        role="button"
        ref={this.containerRef}
        tabIndex={0}
      >
        <Avatar imageUrl={userImage} alt="Bob Ross" />
        <span className="UserName">Bob Ross</span>
        {isDropDownOpen && <DropDown />}
      </div>
    );
  }
}
