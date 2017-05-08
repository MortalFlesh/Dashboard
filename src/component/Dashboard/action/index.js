import {combineEpics} from "redux-observable";
import {clearFlashmessagesEpic} from "./../../FlashMessages/action";
import {loadEpic, preSelectTemplateEpic, selectTemplateEpic} from "./dashboardEpics";
import {
    load,
    preSelectTemplate,
    selectTemplate,
    setItems,
    setTemplateName,
    setTemplates,
    showAddItem,
    showAddTemplate
} from "./dashboardActions";

const rootEpic = combineEpics(
    loadEpic, preSelectTemplateEpic, selectTemplateEpic,
    clearFlashmessagesEpic,
);

export {
    load, preSelectTemplate, selectTemplate, setTemplateName, setItems, setTemplates, showAddItem, showAddTemplate,
    rootEpic,
};
