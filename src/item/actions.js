import dispatcher from './../lib/dispatcher';

export function setMoving(moving: object) {
    dispatcher.dispatch(setMoving, moving);
}

export function setItemPosition(position: object) {
    dispatcher.dispatch(setItemPosition, position);
}
