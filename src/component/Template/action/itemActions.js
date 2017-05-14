import {RESIZE, SAVE, SET_MOVING, SET_POSITION, SHOW_SAVE} from "./../constant";

export function setMoving(moving) {
    return {
        type: SET_MOVING,
        payload: moving,
    }
}

export function setPosition(position) {
    return {
        type: SET_POSITION,
        payload: position,
    }
}

export function resize(resize) {
    return {
        type: RESIZE,
        payload: resize,
    }
}

export function showSave(id) {
    return {
        type: SHOW_SAVE,
        payload: id,
    }
}

export function save(item) {
    return {
        type: SAVE,
        item,
    }
}
