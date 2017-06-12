// @flow
import type {ActionsObservable, Epic, Options} from "redux-observable";
import type {Store} from "../../../flow/type";
import type {State} from "../reducer";

import {Observable} from "rxjs";
import {LOAD, PRE_SELECT_TEMPLATE} from "../constant";
import {TEMPLATE_SAVED} from "../../AddTemplateForm/constant";
import {preSelectTemplate, selectTemplate, setTemplates} from "./dashboardActions";
import {loadTemplate} from "../../Template/action";
import TemplateRecord from "../../Template/record";

export const loadEpic: Epic = (action$: ActionsObservable, store: Store, {api}: Options): ActionsObservable =>
    action$.ofType(LOAD)
        .switchMap(() => api
            .loadTemplates$()
            .flatMap((templates) => [
                setTemplates(templates),
                preSelectTemplate(),
            ])
        );

export const preSelectTemplateEpic: Epic = (action$: ActionsObservable, {getState}: Store, {sessionStorage}: Options): ActionsObservable =>
    action$.ofType(PRE_SELECT_TEMPLATE)
        .switchMap(() => Observable
            .of(sessionStorage.getNumber('selectedTemplate') || getState().dashboard.selectedTemplateId)
            .map((selectedId) => firstTemplateById(getState(), selectedId))
            .filter((template) => !!template)
            .flatMap((template) => [
                selectTemplate(template.id),
                loadTemplate(template),
            ])
        );

export function firstTemplateById({dashboard}: State, selectedId: number): TemplateRecord {
    return dashboard.templates
        .filter((template) => template.id === selectedId)
        .first()
}

export const selectSavedTemplateEpic: Epic = (action$: ActionsObservable): ActionsObservable =>
    action$.ofType(TEMPLATE_SAVED)
        .map(({template}) => selectTemplate(template.id));
