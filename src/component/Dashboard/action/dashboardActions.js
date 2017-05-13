import {
    LOAD,
    PRE_SELECT_TEMPLATE,
    SELECT_TEMPLATE,
    SET_TEMPLATES,
    SHOW_ADD_ITEM,
    SHOW_ADD_TEMPLATE
} from "./../constant";

export function load() {
    return {
        type: LOAD,
    }
}

export function preSelectTemplate() {
    return {
        type: PRE_SELECT_TEMPLATE,
    }
}

export function selectTemplate(selectedTemplateId = 0) {
    return {
        type: SELECT_TEMPLATE,
        selectedTemplateId,
    }
}

export function setTemplates(templates) {
    return {
        type: SET_TEMPLATES,
        templates,
    }
}

export function showAddItem(show) {
    return {
        type: SHOW_ADD_ITEM,
        show,
    }
}

export function showAddTemplate(show) {
    return {
        type: SHOW_ADD_TEMPLATE,
        show,
    }
}
