import {RESIZE, SAVE, SET_MOVING, SET_POSITION} from "./../constant";

export function setMoving(moving) {
    return {
        type: SET_MOVING,
        moving,
    }
}

export function setPosition(position) {
    return {
        type: SET_POSITION,
        position,
    }
}

export function resize(resize) {
    return {
        type: RESIZE,
        resize,
    }
}

export function save(item) {
    return {
        type: SAVE,
        item,
    }
}
