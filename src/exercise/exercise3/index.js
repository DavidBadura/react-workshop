import React from 'react';
import Exercise from "../../components/Exercise";
import {Link} from "react-router-dom";
import Countdown from "./Countdown";

export default function () {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Baue einen Countdown, der von 100 nach 0 runterzählt. Bei 0 angekommen soll "Ring!" angezeigt werden.
                    </p>
                    <pre>
                        src/exercise3/Countdown.js<br/>
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <Countdown/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}
