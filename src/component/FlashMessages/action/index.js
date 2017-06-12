import {combineEpics} from "redux-observable";
import {clearFlashmessagesEpic} from "./flashMessagesEpics";
export {addFlashMessage} from "./flashMessagesActions";

export const flashMessagesEpic = combineEpics(clearFlashmessagesEpic);
