import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ ...INITIAL_STATE });
  };

  handleChangeForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className="form-signin" onSubmit={this.handleSubmitForm}>
        <h2>Sign In</h2>

        <label htmlFor="email" value="email">
          E-mail
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your e-mail..."
            onChange={this.handleChangeForm}
          />
        </label>
        <label htmlFor="password" value="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password..."
            onChange={this.handleChangeForm}
          />
        </label>
        <input type="submit" value="Sign In" />
      </form>
    );
  }
}
