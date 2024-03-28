import React, { Component } from 'react';

class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  //   show = () => {
  //     this.setState({ isOpen: true });
  //   };

  //   hide = () => {
  //     this.setState({ isOpen: false });
  //   };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
        {/* <button onClick={this.hide}>Hide</button> */}
        {isOpen && children}
      </>
    );
  }
}

export default Toggle;
