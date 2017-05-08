import {ADD_ITEM, SET_HEIGHT, SET_NAME, SET_REFRESH_RATE, SET_URL, SET_WIDTH} from "./../constant";

export function setName(name) {
    return {
        type: SET_NAME,
        name,
    }
}

export function setUrl(url) {
    return {
        type: SET_URL,
        url,
    }
}

export function setRefreshRate(refreshRate) {
    return {
        type: SET_REFRESH_RATE,
        refreshRate,
    }
}

export function setHeight(height) {
    return {
        type: SET_HEIGHT,
        height,
    }
}

export function setWidth(width) {
    return {
        type: SET_WIDTH,
        width,
    }
}

export function addItem() {
    return {
        type: ADD_ITEM,
    }
}