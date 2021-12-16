import React from "react";
import Student from "./Student";

class CompUnmountMethod extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Will Unmount</h1>
        {this.state.show ? <Student /> : <h3>Child Component Removed</h3>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Hide Child Component
        </button>
      </div>
    );
  }
}
export default CompUnmountMethod;
