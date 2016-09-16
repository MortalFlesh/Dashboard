import Immutable from "immutable";
import State from "./../lib/state";
import api from "./../service/api";
import * as actions from "./actions";
import TemplateRecord from "./../template/templateRecord";
import ItemRecord from "./../item/itemRecord";

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
    addItemSuccess: false,

    // add template
    showAddTemplate: false,
    addTemplateSuccess: false,

    addTemplateName: defaultTemplate.name,
};

let config = {
    apiUrl: 'http://dashboard-api',
};
let configLocal = {
    apiUrl: 'http://dashboard-api/app_dev.php',
};
/**
 * todo
 * - zkusit jeste nacitat config json (prevedeny z yml pri buildu) primo v index.html)
 * - jak vyresit, aby config_local.yml prepsal config ale nemusel existovat
 */

const basicData = Immutable.fromJS({
    dashboard: Immutable
        .fromJS(dashboard)
        .merge(config)
        .merge(configLocal || {})
        .toJS()
});

const appState = new State(basicData);

export default appState;
export const state = appState;

export const dashboardCursor = appState.cursor(['dashboard']);

export function loadServerData() {
    // todo
    // - selectedTemplate will be stored in localStorage-like system
    // - so it will have sessionStorage.getSelectedTemplate()
    const selectedTemplate = 1;

    api.loadTemplates((response) => {
        actions.setTemplates(response.templates)
    });

    api.loadTemplateName(selectedTemplate, (response) => {
        actions.setTemplateName(response.name)
    });

    api.loadItems(selectedTemplate, (response) => {
        actions.setItems(response.items);
    });
}
