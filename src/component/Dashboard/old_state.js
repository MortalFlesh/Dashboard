import Immutable from "immutable";
import State from "./../../lib/state";
import api from "./../../service/api";
import config from "./../../service/config";
import templateService from "./../../service/templateService";
import * as actions from "./actions";
import {getSelectedTemplate} from "./../../service/sessionStorage/sessionStorageStore";
import TemplateRecord from "./../Template/record";
import ItemRecord from "./../../item/itemRecord";

const defaultTemplate = new TemplateRecord();
const defaultItem = new ItemRecord();

let dashboard = {
    // default data
    templates: [
        defaultTemplate.toJS(),
    ],

    selectedTemplate: defaultTemplate.id,
    templateName: defaultTemplate.name,
    items: defaultTemplate.items,

    // add item
    showAddItem: false,
    addItemName: defaultItem.name,
    addItemUrl: defaultItem.url,
    addItemRefreshRate: defaultItem.refreshRate,
    addItemHeight: defaultItem.height,
    addItemWidth: defaultItem.width,

    // add template
    showAddTemplate: false,
    addTemplateName: defaultTemplate.name,

    // flash messages
    flashMessages: [],
};

const basicData = Immutable.fromJS({
    dashboard: Immutable
        .fromJS(dashboard)
        .merge(config.getConfig())
        .toJS()
});

const appState = new State(basicData);

export default appState;
export const state = appState;

export const dashboardCursor = appState.cursor(['dashboard']);

export function loadServerData() {
    api.loadTemplates()
        .then(actions.setTemplates)
        .then(() => {
            templateService.changeTemplate(getSelectedTemplate() || 1);
        });
}
