import React from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";
import Exercise from "../../components/Exercise";

export default function () {
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
                <Button step={5} />
                <Button step={1} />
                <Button step={7} />
                <Button step={100} />
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}
