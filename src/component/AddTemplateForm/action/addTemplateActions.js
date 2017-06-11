// @flow
import type {Action} from "./../../../flow/types";
import type {TemplateAction} from "./../../Template/action";

import {SAVE, SET_NAME, TEMPLATE_SAVED} from "./../constant";
import TemplateRecord from "./../../Template/record";

export function setName(name: string): Action {
    return {
        type: SET_NAME,
        name,
    }
}

export function save(template: TemplateRecord): TemplateAction {
    return {
        type: SAVE,
        template,
    }
}

export function templateSaved(template: TemplateRecord): TemplateAction {
    return {
        type: TEMPLATE_SAVED,
        template,
    }
}
