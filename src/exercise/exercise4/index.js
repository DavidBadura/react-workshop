import React from 'react';
import Exercise from "../../components/Exercise";
import {Link} from "react-router-dom";
import List from "./List";

function Exercise4 () {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Zeige die Fixtures Daten in der Tabelle an und füge eine Such- und Sortierfunktion ein.
                    </p>
                    <pre>
                        src/exercise4/List.js
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <List/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise4;
