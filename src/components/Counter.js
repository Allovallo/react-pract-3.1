import React, { Component } from 'react';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
  }

  handleIncrement = event => {
    console.log('Increment button was clicked!', event);
    console.log('this.props: ', this.props);
  };

  handleDecrement = event => {
    console.log('Decrement button was clicked!', event);
    console.log('this.props: ', this.props);
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default Counter;
