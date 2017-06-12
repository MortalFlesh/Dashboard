// @flow
import type {Action} from "../../../flow/type";
import type {TemplateList} from "../type";

import {
    LOAD,
    PRE_SELECT_TEMPLATE,
    SELECT_TEMPLATE,
    SET_TEMPLATES,
    SHOW_ADD_ITEM,
    SHOW_ADD_TEMPLATE
} from "../constant";

export function load(): Action {
    return {
        type: LOAD,
    }
}

export function preSelectTemplate(): Action {
    return {
        type: PRE_SELECT_TEMPLATE,
    }
}

export function selectTemplate(selectedTemplateId: number = 0): Action {
    return {
        type: SELECT_TEMPLATE,
        selectedTemplateId,
    }
}

export function setTemplates(templates: TemplateList): Action {
    return {
        type: SET_TEMPLATES,
        templates,
    }
}

export function showAddItem(show: boolean): Action {
    return {
        type: SHOW_ADD_ITEM,
        show,
    }
}

export function showAddTemplate(show: boolean): Action {
    return {
        type: SHOW_ADD_TEMPLATE,
        show,
    }
}
