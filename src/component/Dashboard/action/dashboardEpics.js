import {Observable} from "rxjs";
import {LOAD, PRE_SELECT_TEMPLATE} from "./../constant";
import {preSelectTemplate, selectTemplate, setTemplates} from "./dashboardActions";
import {loadTemplate} from "./../../Template/action";

export const loadEpic = (action$, store, {api}) =>
    action$.ofType(LOAD)
        .switchMap(() =>
            api.loadTemplates$()
                .flatMap((templates) => [
                    setTemplates(templates),
                    preSelectTemplate(),
                ])
        );

export const preSelectTemplateEpic = (action$, {getState}, {sessionStorage}) =>
    action$.ofType(PRE_SELECT_TEMPLATE)
        .switchMap(() =>
            Observable.of(sessionStorage.getNumber('selectedTemplate') || getState().dashboard.selectedTemplateId)
                .map((selectedId) => firstTemplateById(getState(), selectedId))
                .filter((template) => !!template)
                .flatMap((template) => [
                    selectTemplate(template.id),
                    loadTemplate(template),
                ])
        );

function firstTemplateById({dashboard}, selectedId) {
    return dashboard.templates
        .filter((template) => template.id === selectedId)
        .first()
}
