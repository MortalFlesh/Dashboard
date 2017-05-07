import DashboardState from "./../state/dashboardState";
import {SHOW_ADD_TEMPLATE} from "./../constant";

const initialState = new DashboardState();

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_TEMPLATE:
            return state.set('showAddTemplate', action.show);

        default:
            return state;
    }
};
