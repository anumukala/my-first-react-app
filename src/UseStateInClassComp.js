import React, { Component } from "react";
export class UseStateInClassComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.updateClick}>Clicked {count} Time</button>
      </div>
    );
  }
}
