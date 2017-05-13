import {Observable} from "rxjs";
import {getService, TYPES} from "./../../../service";
import {number} from "./../../../service/utils";
import {LOAD, PRE_SELECT_TEMPLATE} from "./../constant";
import {preSelectTemplate, selectTemplate, setTemplates} from "./dashboardActions";
import {loadTemplate} from "./../../Template/action";

export const loadEpic = (action$) =>
    action$.ofType(LOAD)
        .switchMap(() =>
            Observable.from(getService(TYPES.Api).loadTemplates$())
                .flatMap((templates) => [
                    setTemplates(templates),
                    preSelectTemplate(),
                ])
        );

export const preSelectTemplateEpic = (action$, {getState}) =>
    action$.ofType(PRE_SELECT_TEMPLATE)
        .switchMap(() =>
            Observable.of(getSelectedTemplateId(getState().dashboard.selectedTemplateId))
                .map((selectedId) => firstTemplateById(getState(), selectedId))
                .filter((template) => !!template)
                .flatMap((template) => [
                    selectTemplate(template.id),
                    loadTemplate(template),
                ])
        );

function getSelectedTemplateId(defaultId = 0) {
    return number(getService(TYPES.SessionStorage).get('selectedTemplate')) || defaultId;
}

function firstTemplateById({dashboard}, selectedId) {
    return dashboard.templates
        .filter((t) => t.id === selectedId)
        .first()
}
