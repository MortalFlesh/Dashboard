import {combineEpics} from "redux-observable";
import {flashMessagesEpic} from "./../../FlashMessages/action";
import {templateEpics} from "./../../Template/action";
import {addItemEpics} from "./../../AddItemForm/action";
import {addTemplateEpics} from "./../../AddTemplateForm/action";
import {loadEpic, preSelectTemplateEpic, selectSavedTemplateEpic} from "./dashboardEpics";
export {
    load,
    preSelectTemplate,
    selectTemplate,
    setTemplates,
    showAddItem,
    showAddTemplate
} from "./dashboardActions";

const dashboardEpic = combineEpics(loadEpic, preSelectTemplateEpic, selectSavedTemplateEpic);

export const rootEpic = combineEpics(
    dashboardEpic,
    flashMessagesEpic,
    templateEpics,
    addItemEpics,
    addTemplateEpics,
);
