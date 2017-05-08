import {combineEpics} from "redux-observable";
import {clearFlashmessagesEpic} from "./../../FlashMessages/action";
import {
    selectTemplate,
    setItems,
    setTemplateName,
    setTemplates,
    showAddItem,
    showAddTemplate
} from "./dashboardActions";

const rootEpic = combineEpics(
    clearFlashmessagesEpic,
);

export {
    selectTemplate, setTemplateName, setItems, setTemplates, showAddItem, showAddTemplate,
    rootEpic,
};
