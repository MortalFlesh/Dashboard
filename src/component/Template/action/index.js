import {combineEpics} from "redux-observable";
import {loadTemplateEpic, saveItemEpic, showSaveEpic} from "./templateEpics";
export {setItems, loadTemplate, setTemplateName} from "./templateActions";
export {setRefreshRate, resize, save, setMoving, setPosition, showSave} from "./itemActions";

export const templateEpics = combineEpics(loadTemplateEpic, showSaveEpic, saveItemEpic);
