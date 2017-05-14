import {combineEpics} from "redux-observable";
import {loadItemsEpic, saveEpic, showSaveEpic} from "./templateEpics";
export {setItems, loadTemplate} from "./templateActions";
export {resize, save, setMoving, setPosition, showSave} from "./itemActions";

const templateEpics = combineEpics(loadItemsEpic, showSaveEpic, saveEpic);

export {templateEpics};
