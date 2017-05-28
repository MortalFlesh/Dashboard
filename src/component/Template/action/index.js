import {combineEpics} from "redux-observable";
import {loadItemsEpic, itemSaveEpic, showSaveEpic} from "./templateEpics";
export {setItems, loadTemplate} from "./templateActions";
export {resize, save, setMoving, setPosition, showSave} from "./itemActions";

export const templateEpics = combineEpics(loadItemsEpic, showSaveEpic, itemSaveEpic);
