import {LOAD_TEMPLATE, SET_ITEMS, SET_TEPLATE_NAME} from "./../constant";

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

export function setTemplateName(name) {
    return {
        type: SET_TEPLATE_NAME,
        name,
    }
}
