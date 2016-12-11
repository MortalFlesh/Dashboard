import dispatcher from './../lib/dispatcher';

export function addFlashMessage(message: object) {
    dispatcher.dispatch(addFlashMessage, message);
}

export function clearFlashMessages() {
    dispatcher.dispatch(clearFlashMessages);
}
