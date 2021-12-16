import React from "react";
export default class PropsInClass extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        <h3>{this.props.phone}</h3>
      </div>
    );
  }
}
