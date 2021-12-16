import React, { Component } from "react";
export class CounterMouseHover extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  IncrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>
          Incremented {count} Times
        </button>
      </div>
    );
  }
}
