import {combineEpics} from "redux-observable";
import {addFlashMessage, clearFlashmessagesEpic} from "./flashMessagesActions";

const flashMessagesEpic = combineEpics(
    clearFlashmessagesEpic,
);

export {
    addFlashMessage, flashMessagesEpic,
};
