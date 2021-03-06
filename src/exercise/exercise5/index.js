import React from 'react';
import Exercise from "../../components/Exercise";
import {Link} from "react-router-dom";
import Control from "./Control";

function Exercise5() {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Es soll automatisch ein QR-Code erzeugt werden, wenn das Textfeld befüllt wird.
                    </p>
                    <pre>
                        src/exercise5/Control.js<br/>
                        src/exercise5/QrCode.js
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

export default Exercise5;
