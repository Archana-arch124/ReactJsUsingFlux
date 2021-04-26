import React from "react";
import * as ColorAppActions from "../Actions/colorAppActions";
export default class ButtonComponent extends React.Component {

    onButtonClick = (colorName) => {
        ColorAppActions.changeColor(colorName)
    };

    render() {
        return (
            <div >
                <button onClick={() => this.onButtonClick("pink")} className="colorButton">Pink</button>
                <button onClick={() => this.onButtonClick("lightgreen")} className="colorButton">Green</button>
            </div>

        );
    }
}
