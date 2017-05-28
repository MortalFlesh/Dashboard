import AddTemplateState from "./state";
import {SET_NAME, TEMPLATE_SAVED} from "./constant";

const initialState = new AddTemplateState();

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return state.setIn(['template', 'name'], action.name);

        case TEMPLATE_SAVED:
            return new AddTemplateState();

        default:
            return state;
    }
};
