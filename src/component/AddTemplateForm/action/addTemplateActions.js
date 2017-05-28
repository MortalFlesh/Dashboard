import {SAVE, SET_NAME, TEMPLATE_SAVED} from "./../constant";

export function setName(name) {
    return {
        type: SET_NAME,
        name,
    }
}

export function save(template) {
    return {
        type: SAVE,
        template,
    }
}

export function templateSaved(template) {
    return {
        type: TEMPLATE_SAVED,
        template,
    }
}
