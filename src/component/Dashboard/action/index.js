import {combineEpics} from "redux-observable";
import {clearFlashmessagesEpic} from "./../../FlashMessages/action";
import {changeTemplateEpic} from "./dashboardEpics";
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
    changeTemplateEpic,
);

export {
    selectTemplate, setTemplateName, setItems, setTemplates, showAddItem, showAddTemplate,
    rootEpic,
};



export function getSelectedTemplate() {
    return SessionStorage.get('selectedTemplate');
}
