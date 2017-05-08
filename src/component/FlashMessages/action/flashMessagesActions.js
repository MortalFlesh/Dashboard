import {ADD, CLEAR} from "./../constant";

export function addFlashMessage(flashMessage) {
    return {
        type: ADD,
        flashMessage,
    }
}

export const clearFlashmessagesEpic = (action$) =>
    action$.ofType(ADD)
        .debounceTime(2200)
        .map(clearFlashMessages);

function clearFlashMessages() {
    return {
        type: CLEAR,
    }
}
