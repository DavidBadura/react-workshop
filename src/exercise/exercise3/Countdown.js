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
        counter: 3
    };

    start = () => {
        if (this.interval) {
            return;
        }

        this.interval = setInterval(() => {
            if (this.state.counter === 1) {
                clearInterval(this.interval);
            }

            this.setState({
                counter: this.state.counter - 1
            });
        }, 1000);
    };

    stop = () => {
        clearInterval(this.interval);
        this.interval = null;
    };

    handleReset = () => {
        this.setState({
            counter: 10
        });

        this.start();
    };

    /*
     * Wird aufgerufen, nachdem die Komponente in den DOM hinzugefügt wurde
     */
    componentDidMount() {
        this.start();
    }

    /*
     * Wird aufgerufen, bevor die Komponente aus dem DOM entfernt wird
     */
    componentWillUnmount() {
        this.stop();
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.state.counter === 0 ? 'Ring!' : this.state.counter}</div>
                <button onClick={this.handleReset}>reset</button>
            </React.Fragment>
        );
    }
}
