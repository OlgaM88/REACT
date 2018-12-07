import React, { Component } from 'react';

const INITIAL_STATE = {
  address: '',
  rating: '',
  price: '',
};
export default class FormToAddItem extends Component {
  state = { ...INITIAL_STATE };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitForm(e) {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  }

  render() {
    const { address, rating, price } = this.state;
    return (
      <div className="form" onSubmit={this.handleSubmitForm}>
        <h2>Add items</h2>
        <form className="form-container">
          <div className="form-container__item">
            <label htmlFor="address" value="address">
              Address
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-container__item">
            <label htmlFor="rating" value="rating">
              Rating
              <input
                type="number"
                name="rating"
                value={rating}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-container__item">
            <label htmlFor="price" value="price">
              Price
              <input
                type="number"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button
            type="button"
            onSubmit={this.handleSubmitForm}
            className="submit-btn"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
