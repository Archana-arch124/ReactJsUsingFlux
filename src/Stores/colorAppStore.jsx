import dispatcher from "../Dispatcher";
import {EventEmitter} from "events";
import * as ColorAppActions from "../Actions/colorAppActions";

class ColorAppStore extends EventEmitter {

    constructor() {
        super();
        this.activeColor = "lightgrey";
    }

    handleActions(action) {
        switch (action.type) {
            case ColorAppActions.colorAppActions.changeColor: {
                this.activeColor = action.value;
                this.emit("storeUpdated");
                console.log(action.value,"Color updated")
                break;
            }
            default: {
                console.log("Failed")
            }
        }
    }

    getActiveColor() {
        return this.activeColor;
    }
}

const colorAppStore = new ColorAppStore();
dispatcher.register(colorAppStore.handleActions.bind(colorAppStore));

export default colorAppStore;