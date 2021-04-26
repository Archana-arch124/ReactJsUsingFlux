import React from "react";
import ButtonComponent from "./Components/buttonComponent";
import ColorComponent from "./Components/colorComponent";
import "./App.css"

export default class App extends React.Component {

    render() {
        return (
            <div className="main">
                <ButtonComponent/>
                <ColorComponent/>
            </div>

        );
    }
}