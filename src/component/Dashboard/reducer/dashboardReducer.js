import DashboardState from "./../state";
import {SELECT_TEMPLATE, SHOW_ADD_TEMPLATE} from "./../constant";

const initialState = new DashboardState();

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_TEMPLATE:
            return state.set('isShowAddTemplate', action.show);

        case SELECT_TEMPLATE: {
            const {template} = action;
            SessionStorage.set('selectedTemplate', template);

            return state.set('isShowAddTemplate', template);
        }

        default:
            return state;
    }
};
