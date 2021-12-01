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

async function readAllUsers() {
    try {

        const collectionRef = db.collection("name");
        const getPromise = collectionRef.get();
        const snapshot = await getPromise;

        console.log(`Found ${snapshot.size}x user.`)

    } catch (err) {
        console.error(err);
    }
}

readAllUsers();