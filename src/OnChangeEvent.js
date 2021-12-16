import { useState } from "react";

function OnChangeEvent() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getdata(event) {
    console.log(event.target.value);
    setData(event.target.value);
  }

  return (
    <div>
      {print ? <h1>{data}</h1> : null}

      <input type="text" onChange={getdata}></input>
      {/* <h1>{data}</h1> */}
      <button onClick={() => setPrint(true)}>Submit</button>
    </div>
  );
}
export default OnChangeEvent;
