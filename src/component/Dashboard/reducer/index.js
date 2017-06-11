// @flow
import type {State as FlashMessagesState} from "./../../FlashMessages/types";

import {combineReducers} from "redux";
import dashboard from "./dashboardReducer";
import addTemplate from "./../../AddTemplateForm/reducer";
import addItem from "./../../AddItemForm/reducer";
import template from "./../../Template/reducer";
import flashMessages from "./../../FlashMessages/reducer";

import DashboardState from "./../state";
import AddTemplateState from "./../../AddTemplateForm/state";
import TemplateRecord from "./../../Template/record";
import AddItemState from "./../../AddItemForm/state";

export type State = {
    +flashMessages: FlashMessagesState,
    +dashboard: DashboardState,
    +addTemplate: AddTemplateState,
    +template: TemplateRecord,
    +addItem: AddItemState,
};

export default combineReducers({
    flashMessages,
    dashboard,
    addTemplate,
    template,
    addItem,
});
