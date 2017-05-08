import AddTemplateState from "./state";
import {SET_NAME} from "./constant";

const initialState = new AddTemplateState();

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return state.setIn(['template', 'name'], action.name);

        default:
            return state;
    }
};
