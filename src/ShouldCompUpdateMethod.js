import React from "react";

class ShouldCompUpdateMethod extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    console.log("should update", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <h1>Should Component Update {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click Here
        </button>
      </div>
    );
  }
}
export default ShouldCompUpdateMethod;
