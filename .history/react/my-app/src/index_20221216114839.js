import ReactDOM from "react-dom";
import React from "react";

let myfunction = function (a, b) {
    let output = <h2>{a + b}</h2>
    return output
}

const root = document.querySelector('#root');
ReactDOM.render(myfunction(3, 5), root);


/*JSX - 05
Write a function that receives two parameters, a and b 
and returns the sum of them within an h2 tag. */

