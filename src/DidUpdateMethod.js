import React from "react";
class DidUpdateMethod extends React.Component {
  state = {
    message: "Hello",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "React" });
    }, 3000);
  }

  componentDidUpdate() {
    document.getElementById("disclaimer").innerHTML =
      "GoodEvening" + this.state.message;
  }

  render() {
    return (
      <div>
        <h1
          style={{
            margin: "auto",
            width: "50%",
            padding: "20",
            marginTop: "10%",
            border: "solid 1px black",
            textAlign: "center",
            fontSize: 18,
          }}
        >
          React Life Cycle {this.state.message} <div id="disclaimer"></div>
        </h1>
      </div>
    );
  }
}

export default DidUpdateMethod;
