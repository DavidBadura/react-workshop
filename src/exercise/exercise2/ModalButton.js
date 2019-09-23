import React from "react";
import Modal from "./Modal";

/*
 * ModalButton
 *
 * Aufgabe:
 *   Wenn auf den Button geklickt wurde, soll das Modal geöffnet werden.
 *   Sobald im Modal auf close gedrückt wurde, soll es wieder geschlossen werden.
 */
export default class ModalButton extends React.Component {
    state = {
        open: false
    };

    handleOpen = () => {
        alert("this button doesn't work :-(");
    };

    handleClose = () => {
        // todo...
    };

    render() {
        const open = false;

        return (
            <React.Fragment>
                <button onClick={this.handleOpen}>Open!</button>
                {open && <Modal></Modal>}
            </React.Fragment>
        );
    }
}
