import dispatcher from './../lib/dispatcher';

export function addMessage(message: object) {
    dispatcher.dispatch(addMessage, message);
}
