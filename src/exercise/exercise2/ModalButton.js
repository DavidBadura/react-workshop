import React from "react";
import Modal from "./Modal";
import Button from "../exercise1/Button";

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
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleOpen}>Open!</button>
                {this.renderModal()}
            </React.Fragment>
        );
    }

    renderModal() {
        if (!this.state.open) {
            return null;
        }

        return (
            <Modal onClose={this.handleClose}>
                {this.props.children}
            </Modal>
        );
    }
}
