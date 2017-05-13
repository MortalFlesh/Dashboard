import {getService, TYPES} from "./../../../service";
import DashboardState from "./../state";
import {SELECT_TEMPLATE, SET_TEMPLATES, SHOW_ADD_ITEM, SHOW_ADD_TEMPLATE} from "./../constant";

const initialState = new DashboardState();

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMPLATES:
            return state.set('templates', action.templates);

        case SELECT_TEMPLATE: {
            const {selectedTemplateId} = action;

            if (selectedTemplateId === 0) {
                return state;
            }

            getService(TYPES.SessionStorage).set('selectedTemplate', selectedTemplateId);

            return state.set('selectedTemplateId', selectedTemplateId);
        }

        case SHOW_ADD_TEMPLATE:
            return state.set('isShowAddTemplate', action.show);

        case SHOW_ADD_ITEM:
            return state.set('isShowAddItem', action.show);

        default:
            return state;
    }
};
