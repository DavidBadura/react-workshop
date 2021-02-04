import React from 'react';
import Exercise from "../../components/Exercise";
import {Link} from "react-router-dom";
import Overview from "./Overview";

function Exercise6() {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Verwende eine beliebige API um Daten anzuzeigen. Bewerte diese Beiträge.
                    </p>
                    <pre>
                        src/exercise6/Overview.js
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <Overview/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise6;
