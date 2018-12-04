import React, { Component } from 'react';
import Header from './Header';
import OrderHistory from './OrderHistory';
import Modal from './Modal';
import * as API from './services/api';

export default class App extends Component {
  state = {
    isModalWindowOpen: false,
    menu: [],
  };

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
  }

  handleDeleteItem = id => {
    API.deleteItemById(id).then(state => {
      this.setState({ menu: state.menu.filter(item => item.id !== id) });
    });
  };

  handleShowMoreInfo = id => {
    API.getItemMenuById(id).then(state => {
      this.setState({
        isModalWindowOpen: true,
      });
    });
  };

  openModalWindow = () => {
    this.setState(state => ({
      isModalWindowOpen: true,
    }));
  };

  closeModalWindow = () => {
    this.setState(state => ({
      isModalWindowOpen: false,
    }));
  };

  render() {
    const { isModalWindowOpen, menu } = this.state;

    return (
      <div>
        <Header />
        <OrderHistory
          orders={menu}
          onDelete={this.handleDeleteItem}
          onShowMore={this.handleonShowMoreInfo}
        />
        <button type="button" onClick={this.openModalWindow}>
          Open Modal
        </button>
        {isModalWindowOpen && <Modal onClose={this.closeModalWindow} />}
      </div>
    );
  }
}
