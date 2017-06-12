// @flow
import type {Action} from "../../../flow/type";
import type {State} from "../state";

import {List} from "immutable";
import {ADD, CLEAR} from "../constant";

const initialState: State = new List();

export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ADD:
            return state.push(action.flashMessage);

        case CLEAR:
            return state.clear();

        default:
            return state;
    }
};
