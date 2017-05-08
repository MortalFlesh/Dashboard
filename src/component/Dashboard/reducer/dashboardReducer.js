import {number} from "./../../../service/utils";
import {getService} from "./../../../service";
import DashboardState from "./../state";
import {
    PRE_SELECT_TEMPLATE,
    SELECT_TEMPLATE,
    SET_ITEMS,
    SET_TEMPLATES,
    SHOW_ADD_ITEM,
    SHOW_ADD_TEMPLATE
} from "./../constant";

const initialState = new DashboardState();

export default (state = initialState, action) => {
    switch (action.type) {
        case PRE_SELECT_TEMPLATE: {
            const selectedTemplateId = getSelectedTemplateId();
            const template = state.templates
                .filter((template) => template.id === selectedTemplateId)
                .first();

            return template ? state.set('selectedTemplate', template) : state;
        }

        case SET_TEMPLATES:
            return state.set('templates', action.templates);

        case SELECT_TEMPLATE: {
            const {template} = action;
            getService('sessionStorage').set('selectedTemplate', template.id);

            return state.set('selectedTemplate', template);
        }

        case SET_ITEMS:
            return state.setIn(['selectedTemplate', 'items'], action.items);

        case SHOW_ADD_TEMPLATE:
            return state.set('isShowAddTemplate', action.show);

        case SHOW_ADD_ITEM:
            return state.set('isShowAddItem', action.show);

        default:
            return state;
    }
};

function getSelectedTemplateId() {
    return number(getService('sessionStorage').get('selectedTemplate')) || 1;
}
