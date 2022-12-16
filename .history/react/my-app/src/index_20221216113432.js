import ReactDOM from "react-dom";
import React from "react";

const hello = <h1>Hello World</h1>;
console.log("hello");

const root = document.querySelector('#root');
ReactDOM.render(hello, root);

let myfunction = function(name) {
    
    console.log(`<h1>Hello, ${name}</h1>`);
}

/* JSX - 02
Write a function that receives a name argument 
and returns a h1 tag with the name variable 
appended to the "Hello, " string. */

