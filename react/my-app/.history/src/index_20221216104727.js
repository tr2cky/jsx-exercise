/* import ReactDOM from 'react-dom';
import { App } from './App';



const root = document.querySelector('#root');

ReactDOM.render(<App />, root); */

import { ReactDOM } from "react";
import React from "react";

const hello = <h1>Hello World</h1>;
console.log("hello");

expo class App extends React.Component {
    render() {
        return (
            <div>
                <h1> My Awesome Application</h1>
                <HelloWorld />
            </div>
        );
    }
}