import api from "./../../service/api";
import templateService from "./../../service/templateService";
import * as actions from "./actions";
import {getSelectedTemplate} from "./../../service/sessionStorage/sessionStorageStore";

export default appState;
export const state = appState;

export const dashboardCursor = appState.cursor(['dashboard']);

export function loadServerData() {
    api.loadTemplates()
        .then(actions.setTemplates)
        .then(() => {
            templateService.changeTemplate(getSelectedTemplate() || 1);
        });
}
