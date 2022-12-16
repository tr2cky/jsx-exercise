import ReactDOM from "react-dom";
import React from "react";

const hello = <h1>Hello World</h1>;
console.log("hello");

const root = document.querySelector('#root');
ReactDOM.render(hello, root);

myfunction = function(name) {
    console.log(`<h1Hello, ${name}`);
}

/* JSX - 02
Write a function that receives a name argument 
and returns a h1 tag with the name variable 
appended to the "Hello, " string. */

