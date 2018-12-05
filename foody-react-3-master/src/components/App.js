import React, { Component } from 'react';
import Header from './Header';
import OrderHistory from './OrderHistory';
import Modal from './Modal';
import * as API from './services/api';

export default class App extends Component {
  state = {
    isModalWindowOpen: false,
    menu: [],
    item: null,
  };

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
  }

  handleDeleteItem = id => {
    API.deleteItemById(id).then(response => {
      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getItemMenuById(id).then(response => {
      this.setState({
        isModalWindowOpen: true,
        item: response.data,
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
    const { isModalWindowOpen, menu, item } = this.state;

    return (
      <div>
        <Header />
        <OrderHistory
          orders={menu}
          onDelete={this.handleDeleteItem}
          onShowMore={this.handleShowMoreInfo}
        />
        <button type="button" onClick={this.openModalWindow}>
          Open Modal
        </button>
        {isModalWindowOpen && (
          <Modal className="Modal" onClose={this.closeModalWindow}>
            <p>{item.price}</p>
          </Modal>
        )}
      </div>
    );
  }
}
