import { useState } from "react";

function UseStateHook() {
  const [data, setdata] = useState("UI Training");

  function updateData() {
    setdata("react training");
  }

  console.warn("_______________");

  return (
    <div className="App">
      <h1>{data}</h1>
      {/* <button onClick={display}>Click Me</button> */}
      <button onClick={() => updateData()}>Click Me</button>
    </div>
  );
}

export default UseStateHook;
