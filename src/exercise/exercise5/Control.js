import React from "react";

/*
 * Aufgabe:
 *   Der Inhalt der Input-Feldes muss ausgelesen werden, sobald sich der Inhalt ändert.
 *   Daraufhin soll ein QR-Code, mit dem Inhalt, angezeigt werden.
 *
 * Bonus Aufgabe:
 *   Füge zwei Felder hinzu, womit die Hintergrund- und Vordergrundfarbe konfiguriert werden kann.
 *   Diese Werte müssen dann an die QrCode Komponente weiter gegeben werden.
 */
export default class QrCode extends React.Component {
    render() {
        return (
            <React.Fragment>
                <input/>
                <QrCode/>
            </React.Fragment>
        );
    }
}
