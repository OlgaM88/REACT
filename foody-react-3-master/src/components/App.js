import React, { Component } from 'react';
import Header from './Header';
import OrderHistory from './OrderHistory';
import Modal from './Modal';
import * as API from './services/api';
import FormToAddItem from './FormToAddItem';
import SignIn from './SignIn';

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
            <p>{item.price}</p>
          </Modal>
        )}
        <FormToAddItem />
        <SignIn />
      </div>
    );
  }
}
