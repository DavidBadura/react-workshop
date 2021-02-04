import React from "react";

/*
 * RestAPI
 *
 * https://alexwohlbruck.github.io/cat-facts/docs/
 *
 * Aufgabe:
 *   Hole Daten aus einer REST API und zeige diese an.
 *   Füge zu jedem Beitrag ein Up/Down-Vote Button hinzu und zeig den aktuellen Status an.
 */
export default class Overview extends React.Component {
    state = {
        data: null,
        votes: []
    };

    componentDidMount() {
        // fetch data
    }

    render() {
        if (this.state.data === null) {
            return <div>Loading...</div>
        }

        return (
            <div>
                {this.state.data.map(this.renderItem)}
            </div>
        );
    }

    renderItem(item) {
        return (
            <div>item...</div>
        );
    }
}
