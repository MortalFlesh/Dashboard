import dispatcher from './../lib/dispatcher';

export function setMoving(moving: object) {
    dispatcher.dispatch(setMoving, moving);
}

export function setItemPosition(position: object) {
    dispatcher.dispatch(setItemPosition, position);
}

export function resizeItem(resize: object) {
    dispatcher.dispatch(resizeItem, resize);
}

export function saveItem(item: object) {
    dispatcher.dispatch(saveItem, item);
}
