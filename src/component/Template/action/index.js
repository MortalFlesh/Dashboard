import {combineEpics} from "redux-observable";
import {loadItemsEpic} from "./templateEpics";
export {setItems, loadTemplate} from "./templateActions";
export {resize, save, setMoving, setPosition} from "./itemActions";

const templateEpics = combineEpics(loadItemsEpic);

export {templateEpics};
