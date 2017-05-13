import {combineEpics} from "redux-observable";
import {clearFlashmessagesEpic} from "./flashMessagesEpics";
export {addFlashMessage} from "./flashMessagesActions";

const flashMessagesEpic = combineEpics(clearFlashmessagesEpic);

export {flashMessagesEpic};
