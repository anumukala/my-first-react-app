function EventsInFunction() {
    function display()
    {
        alert ("Events in fucntions");
    }
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* <button onClick={display}>Click Me</button> */}
        <button onClick={()=>display()}>Click Me</button>
      </div>
    );
  }
  
  export default EventsInFunction;
  