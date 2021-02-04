import React from 'react';
import Button from "./ModalButton";
import Exercise from "../../components/Exercise";
import {Link} from "react-router-dom";

function Exercise2 () {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Beim Klicken soll das Modal geöffnet werden. Beim Klicken des "Close-Buttons" soll das Modal
                        wieder geschlossen werden.
                    </p>
                    <pre>
                        src/exercise2/ModalButton.js<br/>
                        src/exercise2/Modal.js
                    </pre>
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

export default Exercise2;
