import {Record} from "immutable";
import DashboardState from "./dashboardState";
import AddTemplateState from "./addTemplateState";
import AddItemState from "./addItemState";

export default new Record({
    dashboard: new DashboardState(),
    addTemplate: new AddTemplateState(),
    addItem: new AddItemState(),
});
