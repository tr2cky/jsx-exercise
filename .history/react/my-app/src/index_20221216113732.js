import ReactDOM from "react-dom";
import React from "react";

const hello = <h1>Hello World</h1>;
console.log("hello");
let myfunction = function(name) {
    const header = <h1>Hello, {name}</h1>;
    console.log(header);
    return 
}
let greeting = myfunction("fatih");

const root = document.querySelector('#root');
ReactDOM.render(greeting, root);


/* JSX - 02
Write a function that receives a name argument 
and returns a h1 tag with the name variable 
appended to the "Hello, " string. */
