// @flow
import type {Action} from "./../../../flow/types";
import type {ItemList} from "./../types";

import {LOAD_TEMPLATE, SET_ITEMS, SET_TEPLATE_NAME} from "./../constant";
import TemplateRecord from "./../record";

export type TemplateAction = { type: string, template: TemplateRecord };

export function setItems(items: ItemList): Action {
    return {
        type: SET_ITEMS,
        items,
    }
}

export function loadTemplate(template: TemplateRecord): TemplateAction {
    return {
        type: LOAD_TEMPLATE,
        template,
    }
}

export function setTemplateName(name: string): Action {
    return {
        type: SET_TEPLATE_NAME,
        name,
    }
}
