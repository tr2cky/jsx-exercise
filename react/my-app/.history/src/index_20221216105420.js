import ReactDOM from "react-dom";
import React from "react";

const hello = <h1>Hello World</h1>;
console.log("hello");

const root = document.querySelector('#root');
ReactDOM.render(hello, root);

/* JSX - 01
Create a new React Project. Always use one GitHub repo for the project.

Create a variable called hello and inizialize it with an h1 tag with the message "Hello, World!". */