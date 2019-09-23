import React from "react";

/*
 * Click Counter
 *
 * Aufgabe:
 *   Im Button soll die Zahl 0 angezeigt werden.
 *   Bei jedem Klick soll diese Zahl erhöht werden.
 */
export default class Button extends React.Component {

    /*
     *standard "states" die beim erstellen gesetzt werden sollen
     */
    state = {
        counter: 0
    };

    /*
     * soll aufrufen werden, wenn ein click passiert.
     */
    handleClick = () => {

        /*
         * setzt den neuen state. `this.state.counter` ist nur lesend!
         * Sobald der state sich geändert hat, wird render neu aufgerufen.
         */
        this.setState({
            counter: 5
        });
    };

    /*
     * Bei jeder State Änderung wird die render Methode aufgerufen!
     */
    render() {

        /*
         * Mit `this.state.*` kann man lesend auf die states zugreifen
         */
        let foo = 'Click me!';

        /*
         * Mit "{}" wechselt man in den Javascript Kontext. Man kann innerhalb wieder mit "<>" in JSX wechseln.
         *
         * Hints:
         *   onClick
         *   onUpdate
         *   onKeyUp
         *   usw.
         */
        return (
            <button>{foo}</button>
        );
    }
}
