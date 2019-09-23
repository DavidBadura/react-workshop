import React from "react";

/*
 * Fixtures, könnte auch aus einer DB oder RestAPI stammen.
 */
const DATA = [
    {category: "Sporting Goods", price: 49.99, stocked: true, name: "Football"},
    {category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball"},
    {category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7"}
];

/*
 * Es ist auch möglich inline Styles zu definieren. Ist bei ReactJS kein NO-GO, ist eher Geschmacksache.
 * Wichtig ist, dass Komponenten und Styles stark verknüpft sind, um Komponenten orientiert zu arbeiten.
 * Sprich, entweder inline oder pro Komponente eine css Datei.
 */
const style = {
    table: {
        width: 400,
        margin: '0 auto'
    }
};

/*
 * List
 *
 * Aufgabe:
 *   Die Daten sollen in der Tabelle dargestellt werden.
 *   Diese Daten sollen Suchbar (nach name) und sortierbar sein.
 */
export default class List extends React.Component {
    state = {
        search: '',
        sort: ''
    };

    /*
     * So soll die Komponente gerendert werden.
     */
    render() {

        /*
         * JS Hints:
         *   [].filter(callback)
         *   [].sort(callback)
         *
         *   "string".toLowerCase()
         *   "string".includes("string")
         *   "string".localeCompare("string")
         */

        return (
            <div>
                {this.renderForm()}
                {this.renderTable(DATA)}
            </div>
        );
    }

    /*
     * Hilfs Methode um das Formular zu rendern (ist nichts reactjs spezifisches)
     */
    renderForm() {
        /*
         * Hint:
         *   onChange={(event) => console.log(event.value)}
         */
        return (
            <form>
                <input name="search" type="text"/>
                <select name="sort">
                    <option value="">nothing</option>
                    <option value="name">sort by name</option>
                    <option value="price">sort by price</option>
                </select>
            </form>
        );
    }

    renderTable(data) {
        return (
            <table style={style.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {data.map(this.renderElement)}
                </tbody>
            </table>
        );
    }

    renderElement(data) {
        return (
            <tr key={data.name}>
                <td>Foo</td>
                <td>Bar</td>
                <td>Baz</td>
            </tr>
        );
    }
}
