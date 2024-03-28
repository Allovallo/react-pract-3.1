import React, { Component } from 'react';

const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

class Btn extends Component {
  state = { message: new Date().toLocaleTimeString() };

  updateMessage = event => {
    // console.log(event);
    this.setState({ message: new Date().toLocaleTimeString() });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage}></Button>
      </>
    );
  }
}

export default Btn;
