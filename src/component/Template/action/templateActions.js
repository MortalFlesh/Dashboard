import {LOAD_TEMPLATE, SET_ITEMS} from "./../constant";

export function setItems(items) {
    return {
        type: SET_ITEMS,
        items,
    }
}

export function loadTemplate(template) {
    return {
        type: LOAD_TEMPLATE,
        template,
    }
}
