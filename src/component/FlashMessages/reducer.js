import {List} from 'immutable';
import {ADD, CLEAR} from "./constant";

const initialState = new List();

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return state.push(action.flashMessage);

        case CLEAR:
            return state.clear();

        default:
            return state;
    }
};
