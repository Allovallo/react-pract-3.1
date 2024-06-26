import React, { Component } from 'react';

class LoginForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    console.log(login, password);

    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="login"></input>
        <input type="password" name="password"></input>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
