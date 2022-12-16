import React from "react";
import { HelloWorld } from "./HelloWorld";
export class App extends React.Component {
    render() {
        return (
            <div>
                <h1> My Awesome Application</h1>
                <HelloWorld />
                
            </div>
        );
    }
}