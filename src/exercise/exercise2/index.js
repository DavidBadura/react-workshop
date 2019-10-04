import React from 'react';
import ModalButton from "./ModalButton";
import Exercise from "../../components/Exercise";
import {Link} from "react-router-dom";
import Button from "../exercise1/Button";

export default function () {
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
                <ModalButton>
                    Test 123
                    <Button step={1}/>
                </ModalButton>

                <ModalButton>
                    Foo Bar
                    <Button step={5}/>

                    <ModalButton>
                        Inception
                        <Button step={10}/>

                    </ModalButton>

                </ModalButton>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}
