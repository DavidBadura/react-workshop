import React from 'react';

/*
 * Countdown
 *
 * Aufgabe:
 *   Die angezeigte Box soll von 10 auf 0 runterzählen.
 *   Wenn der Countdown bei 0 (oder drunter) Angekommen ist, soll stattdessen "Ring!" angezeigt werden.
 *   Das Interval soll registriert werden, wenn die Komponente angezeigt wird.
 *   Und soll wieder Entfernt werden, wenn die Komponente nicht mehr benutzt wird,
 *
 * Bonus Aufgabe:
 *   Füge ein Reset-Button hinzu, um den State wieder auf 10 zu setzen.
 */
export default class Countdown extends React.Component {
    state = {
        counter: 100
    };

    /*
     * Wird aufgerufen, nachdem die Komponente in den DOM hinzugefügt wurde
     */
    componentDidMount() {
        /*
         * Führt den callback jede Sekunde aus.
         * Mit `clearInterval(this.interval)` kann das interval beendet werden.
         */
        this.interval = setInterval(() => {

        }, 1000);
    }

    /*
     * Wird aufgerufen, bevor die Komponente aus dem DOM entfernt wird
     */
    componentWillUnmount() {

    }

    render() {
        return (
            <div>{this.state.counter}</div>
        );
    }
}
