import dispatcher from "../Dispatcher";

export const colorAppActions = {
    changeColor: 'colorAppActions.ChangeColor'
};

export function changeColor(colorName) {
    dispatcher.dispatch({
        type: colorAppActions.changeColor,
        value: colorName
    })
}
