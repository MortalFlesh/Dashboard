import FlashMessagesState from "./state";
import {ADD, CLEAR} from "./constant";

const initialState = new FlashMessagesState();

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return state.flashMessages.push(action.flashMessage);

        case CLEAR:
            return state.flashMessages.clear();

        default:
            return state;
    }
};
