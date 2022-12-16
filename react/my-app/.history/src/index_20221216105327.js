import ReactDOM from "react-dom";
import React from "react";

const hello = <h1>Hello World</h1>;
console.log("hello");

const root = document.querySelector('#root');
ReactDOM.render(hello, root);
