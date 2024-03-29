import React, { Component } from 'react';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login!"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Enter email!"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter password!"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Agree to terms
          <input type="checkbox" checked={agreed} onChange={this.handleChange} />
        </label>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default SignUpForm;
