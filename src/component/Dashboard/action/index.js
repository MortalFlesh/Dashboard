import {combineEpics} from "redux-observable";
import {flashMessagesEpic} from "./../../FlashMessages/action";
import {loadEpic, preSelectTemplateEpic, selectTemplateEpic} from "./dashboardEpics";
export {
    load,
    preSelectTemplate,
    selectTemplate,
    setItems,
    setTemplateName,
    setTemplates,
    showAddItem,
    showAddTemplate
} from "./dashboardActions";

const dashboardEpic = combineEpics(
    loadEpic, preSelectTemplateEpic, selectTemplateEpic
);

const rootEpic = combineEpics(
    dashboardEpic,
    flashMessagesEpic,
);

export {
    rootEpic,
};
