import React from "react";
class Student extends React.Component {
  componentWillUnmount() {
    alert("componentwillunmount called");
  }

  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }
}
export default Student;
