import React, { Component } from 'react';
import * as API from '../server/api';
import Header from './Header/Header';
import OrderHistory from './OrderHistory/OrderHistory';
import Modal from './Modal';
import FormToAddItem from './OrderHistory/FormToAddItem';
import Authentication from './Header/Authentication/Authentication';

export default class App extends Component {
  state = {
    isModalWindowOpen: false,
    menu: [],
    item: null,
    isLoading: false,
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
    this.setState({ isLoading: true });
    API.getItemMenuById(id).then(response => {
      this.setState({
        isModalWindowOpen: true,
        isLoading: false,
        item: response.data,
      });
    });
  };

  addMenuItem = item => {
    this.setState({ isLoading: true });

    API.addMenuItem(item).then(newItem => {
      this.setState(prevState => ({
        menu: [...prevState.menu, newItem],
        isLoading: false,
      }));
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
    const { isModalWindowOpen, menu, item, isLoading } = this.state;

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
        {isLoading && <p className="LoadingMessage"> Загрузка даных...</p>}
        {isModalWindowOpen && (
          <Modal className="Modal" onClose={this.closeModalWindow}>
            {item && <p>{item.price}</p>}
          </Modal>
        )}
        <FormToAddItem addItem={this.addMenuItem} />
        <Authentication />
      </div>
    );
  }
}
