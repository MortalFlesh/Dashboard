import {combineEpics} from "redux-observable";
import {flashMessagesEpic} from "./../../FlashMessages/action";
import {templateEpics} from "./../../Template/action";
import {addItemEpics} from "./../../AddItemForm/action";
import {loadEpic, preSelectTemplateEpic} from "./dashboardEpics";
export {
    load,
    preSelectTemplate,
    selectTemplate,
    setTemplates,
    showAddItem,
    showAddTemplate
} from "./dashboardActions";

const dashboardEpic = combineEpics(loadEpic, preSelectTemplateEpic);

export const rootEpic = combineEpics(
    dashboardEpic,
    flashMessagesEpic,
    templateEpics,
    addItemEpics,
);
