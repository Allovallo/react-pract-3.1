import React, { Component } from 'react';

class FormMini extends Component {
  state = { login: '' };

  handleChange = event => {
    this.setState({ login: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);

    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login!"
            value={login}
            onChange={this.handleChange}
          ></input>
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

export default FormMini;
