import {combineEpics} from "redux-observable";
import {
    selectTemplate,
    setItems,
    setTemplateName,
    setTemplates,
    showAddItem,
    showAddTemplate
} from "./dashboardActions";

const rootEpic = combineEpics(
);

export {
    selectTemplate, setTemplateName, setItems, setTemplates, showAddItem, showAddTemplate,
    rootEpic,
};
