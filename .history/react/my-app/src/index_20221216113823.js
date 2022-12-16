import ReactDOM from "react-dom";
import React from "react";

let myfunction = function(name) {
    const header = <h1>Hello, {name}</h1>;
    return header
}

const root = document.querySelector('#root');
ReactDOM.render(myfunction("Ali"), root);


/* JSX - 02
Write a function that receives a name argument 
and returns a h1 tag with the name variable 
appended to the "Hello, " string. */

