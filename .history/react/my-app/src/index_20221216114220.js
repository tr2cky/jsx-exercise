import ReactDOM from "react-dom";
import React from "react";

let myfunction = function (name) {
    const header = <h1>Hello, {name}</h1>;
    return header
}

const root = document.querySelector('#root');
ReactDOM.render(myfunction("Ali"), root);


/*JSX - 05
Write a function that receives two parameters, a and b and returns the sum of them within an h2 tag. */

