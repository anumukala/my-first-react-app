import { useState } from "react";

function IncrementClick() {
  const [data, setdata] = useState(0);

  function updateData() {
    setdata(data + 1);
  }

  console.warn("_______________");

  return (
    <div className="App">
      <h1>{data}</h1>
      {/* <button onClick={display}>Click Me</button> */}
      {/* <button onClick={() => updateData()}>Click Me</button> */}
      <button onClick={updateData}>Click Me</button>
    </div>
  );
}

export default IncrementClick;
