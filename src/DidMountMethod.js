import React from "react";

class DidMountMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "lightgreen",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "red" });
    }, 3000);
  }
  render() {
    return (
      <div>
        <h2
          style={{
            color: this.state.color,
            textAlign: "center",
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: "auto",
            fontWeight: "bold",
          }}
        >
          Hello World
        </h2>
      </div>
    );
  }
}
export default DidMountMethod;
