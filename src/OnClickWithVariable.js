function OnClickWithVariable() {
    let data="ui training";
    function display()
    {
        data="react training";
        alert (data);
    }

    console.warn ("_______________");
    return (
      <div className="App">
        <h1>{data}</h1>
        {/* <button onClick={display}>Click Me</button> */}
        <button onClick={()=>display()}>Click Me</button>
      </div>
    );
  }
  
  export default OnClickWithVariable;
  