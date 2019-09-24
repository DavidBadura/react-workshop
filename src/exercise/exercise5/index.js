import React from 'react';
import Exercise from "../../components/Exercise";
import {Link} from "react-router-dom";
import Control from "./Control";

export default function () {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Es soll automatisch ein QR-Code erzeugt werden, wenn das Textfeld befüllt wird.
                    </p>
                    <pre>
                        src/exercise4/List.js<br/>
                        src/exercise4/List.js
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <Control/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}
