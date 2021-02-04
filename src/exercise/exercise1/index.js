import React from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";
import Exercise from "../../components/Exercise";

function Exercise1() {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                    Zum Begin soll der Button die Zahl 0 anzeigen. Bei jedem Klick soll diese Zahl um eins erhöht
                    werden.
                    </p>
                    <pre>src/exercise1/Button.js</pre>
                </Exercise>
            </div>
            <div className="App-row">
                <Button/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise1;
