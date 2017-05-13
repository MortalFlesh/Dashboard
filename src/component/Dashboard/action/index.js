import {combineEpics} from "redux-observable";
import {flashMessagesEpic} from "./../../FlashMessages/action";
import {templateEpics} from "./../../Template/action";
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

const rootEpic = combineEpics(
    dashboardEpic,
    flashMessagesEpic,
    templateEpics,
);

export {rootEpic};
