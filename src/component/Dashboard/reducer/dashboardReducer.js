// @flow
import type {Action} from './../../../flow/types';

import {SELECT_TEMPLATE, SET_TEMPLATES, SHOW_ADD_ITEM, SHOW_ADD_TEMPLATE} from "./../constant";
import {TEMPLATE_SAVED} from "./../../AddTemplateForm/constant";
import {ITEM_SAVED} from "./../../AddItemForm/constant";
import {getService, TYPES} from "./../../../service";
import DashboardState from "./../state";

const initialState = new DashboardState();

export default (state: DashboardState = initialState, action: Action): DashboardState => {
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

        case TEMPLATE_SAVED:
            return state.merge({
                isShowAddTemplate: false,
                templates: state.templates.push(action.template),
            });

        case SHOW_ADD_ITEM:
            return state.set('isShowAddItem', action.show);

        case ITEM_SAVED:
            return state.set('isShowAddItem', false);

        default:
            return state;
    }
};
