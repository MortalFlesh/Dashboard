import dispatcher from './../lib/dispatcher';

export function setMoving(moving: object) {
    dispatcher.dispatch(setMoving, moving);
}
