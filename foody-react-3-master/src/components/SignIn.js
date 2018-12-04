import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleChangeForm(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitForm(e) {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-signin">
        <h2>Sign In</h2>
        <form className="form-container">
          <div className="form-container__item">
            <label htmlFor="email" value="email">
              E-mail
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter your e-mail..."
              />
            </label>
          </div>
          <div className="form-container__item">
            <label htmlFor="password" value="password">
              Password
              <input
                type="text"
                name="password"
                value={password}
                placeholder="Enter your password..."
              />
            </label>
          </div>
          <button
            type="button"
            onSubmit={this.handleSubmitForm}
            className="signin-btn"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
