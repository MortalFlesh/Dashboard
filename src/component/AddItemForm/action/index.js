import {combineEpics} from "redux-observable";
import {saveEpic} from "./addItemEpics";
export {save, setHeight, setName, setRefreshRate, setUrl, setWidth} from "./addItemActions";

export const addItemEpics = combineEpics(saveEpic);
