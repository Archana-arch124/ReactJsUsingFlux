import React from "react";
import ColorAppStore from "../Stores/colorAppStore.jsx";

export default class ColorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ColorAppStore.getActiveColor()
        }
    }

    componentDidMount() {
        ColorAppStore.on("storeUpdated", this.updateBackgroundColor);
    }

    componentWillUnmount() {
        ColorAppStore.removeListener("storeUpdated", this.updateBackgroundColor);
    }

    updateBackgroundColor = () => {
        this.setState({ color: ColorAppStore.getActiveColor() })
    };

    render() {
        return (
            <div className="colorContainer" style={{ backgroundColor: this.state.color }}>
                <div className="text">React Js using Flux Concepts<br></br>
                1.Dispatcher<br></br>
                2.Stores<br></br>
                3.Views (React components)<br></br>
                4.Action</div>
            </div>
        );
    }
}
