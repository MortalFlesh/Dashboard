import {combineEpics} from "redux-observable";
import {loadItemsEpic, showSaveEpic} from "./templateEpics";
export {setItems, loadTemplate} from "./templateActions";
export {resize, save, setMoving, setPosition, showSave} from "./itemActions";

const templateEpics = combineEpics(loadItemsEpic, showSaveEpic);

export {templateEpics};
