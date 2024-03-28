import React, { Component } from 'react';

class Toggle extends Component {
  state = { isOpen: false };

  show = () => {
    this.setState({ isOpen: true });
  };

  hide = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
      </>
    );
  }
}
