import {ADD_TEMPLATE, SET_NAME} from "./../constant";

export function setName(name) {
    return {
        type: SET_NAME,
        name,
    }
}

export function addTemplate() {
    return {
        type: ADD_TEMPLATE,
    }
}
