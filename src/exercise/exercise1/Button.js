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
        const step = this.props.step || 1;

        /*
         * setzt den neuen state. `this.state.counter` ist nur lesend!
         * Sobald der state sich geändert hat, wird render neu aufgerufen.
         */
        this.setState({
            counter: this.state.counter + step
        });
    };

    /*
     * Bei jeder State Änderung wird die render Methode aufgerufen!
     */
    render() {
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
            <button onClick={this.handleClick}>{this.state.counter}</button>
        );
    }

    renderHeadline() {
        return <h1>Test</h1>;
    }
}
