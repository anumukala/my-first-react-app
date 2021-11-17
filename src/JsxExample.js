import React from "react";
var i=10;
function JsxExample() {
    var myStyle ={
        fontSize:100,
        color: '#FF0000'
    }
    //return <h1>Hello World</h1>
    // The above statement can be written as

    //return React.createElement('h1',null,'Hello World')
    // This statement also can be written as below using div tag

    //<div>
    //    <h1>Hello World</h1>
    //</div>

    //The above div can be written as follows

    //return React.createElement ('div',null,React.createElement('h1',null,'Hello World')); //We will use this very rarely

    return (
    <div>
        <h1>{4+4}</h1>
        <h1 style={myStyle}>{i==10 ? 'True' : 'False'}</h1>
    </div>
    )

}
export default JsxExample;