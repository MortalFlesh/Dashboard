import {ADD} from "./../constant";
import {clearFlashMessages} from "./flashMessagesActions";

export const clearFlashmessagesEpic = (action$) =>
    action$.ofType(ADD)
        .debounceTime(3000)
        .map(clearFlashMessages);
