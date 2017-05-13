import {ADD, CLEAR} from "./../constant";

export function addFlashMessage(flashMessage) {
    return {
        type: ADD,
        flashMessage,
    }
}

export function clearFlashMessages() {
    return {
        type: CLEAR,
    }
}
