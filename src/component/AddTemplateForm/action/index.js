import {combineEpics} from "redux-observable";
import {saveTemplateEpic} from "./addTemplateEpics";
export {save, templateSaved, setName} from "./addTemplateActions";

export const addTemplateEpics = combineEpics(saveTemplateEpic);
