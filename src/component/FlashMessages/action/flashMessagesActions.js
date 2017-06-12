// @flow
import type {Action} from "../../../flow/type";

import {ADD, CLEAR} from "../constant";
import FlashMessageRecord from "../../FlashMessage/record";

export function addFlashMessage(flashMessage: FlashMessageRecord): Action {
    return {
        type: ADD,
        flashMessage,
    }
}

export function clearFlashMessages(): Action {
    return {
        type: CLEAR,
    }
}
