import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { db } from "./firebase";

ReactDOM.render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>,
    document.querySelector("#root")
);

console.log(db);