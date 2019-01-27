import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
  username: '',
  phone: '',
};

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleSubmitForm = e => {
    e.preventDefault();
    const { email, password, username, phone } = this.state;
    const newUser = { email, password, username, phone };
    console.log(newUser);
    this.setState({ ...INITIAL_STATE });
  };

  handleChangeForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, phone, username } = this.state;
    return (
      <form className="form-signup" onSubmit={this.handleSubmitForm}>
        <h2>Sign In</h2>

        <label htmlFor="username" value="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username..."
            onChange={this.handleChangeForm}
          />
        </label>
        <label htmlFor="email" value="email">
          E-mail:
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your e-mail..."
            onChange={this.handleChangeForm}
          />
        </label>

        <label htmlFor="phone" value="phone">
          Phone:
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Enter your phone..."
            onChange={this.handleChangeForm}
          />
        </label>

        <label htmlFor="password" value="password">
          Password:
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter your password..."
            onChange={this.handleChangeForm}
          />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}
