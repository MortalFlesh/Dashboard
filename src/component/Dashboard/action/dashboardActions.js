import {
    SELECT_TEMPLATE,
    SET_ITEMS,
    SET_TEMPLATE_NAME,
    SET_TEMPLATES,
    SHOW_ADD_ITEM,
    SHOW_ADD_TEMPLATE
} from "./../constant";

export function selectTemplate(template) {
    return {
        type: SELECT_TEMPLATE,
        template,
    }
}

export function setTemplateName(name) {
    return {
        type: SET_TEMPLATE_NAME,
        name,
    }
}

export function setItems(items) {
    return {
        type: SET_ITEMS,
        items,
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
