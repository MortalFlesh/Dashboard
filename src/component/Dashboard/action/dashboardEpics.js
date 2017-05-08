import {Observable} from "rxjs";
import {getService} from "./../../../service";
import {LOAD, PRE_SELECT_TEMPLATE, SELECT_TEMPLATE} from "./../constant";
import {preSelectTemplate, selectTemplate, setItems, setTemplates} from "./dashboardActions";

export const loadEpic = (action$) =>
    action$.ofType(LOAD)
        .switchMap(() =>
            Observable.from(getService('api').loadTemplates$())
                .flatMap((templates) => [
                    setTemplates(templates),
                    preSelectTemplate(),
                ])
        );

export const preSelectTemplateEpic = (action$, {getState}) =>
    action$.ofType(PRE_SELECT_TEMPLATE)
        .map(() => selectTemplate(getState().dashboard.selectedTemplate));

export const selectTemplateEpic = (action$) =>
    action$.ofType(SELECT_TEMPLATE)
        .switchMap(({template}) =>
            Observable.from(getService('api').loadItems$(template.id))
                .map(setItems)
        );
