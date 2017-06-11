// @flow
import type {ActionsObservable, Epic, Options} from "redux-observable";
import type {Store} from "./../../../flow/types";

import React from "react";
import {inArray} from "./../../../service/utils";
import {SELECT_TEMPLATE} from "./../../Dashboard/constant";
import {RESIZE, SAVE, SET_POSITION, SET_REFRESH_RATE} from "./../constant";
import {setItems, setTemplateName, showSave} from "./../action";
import {addFlashMessage} from "./../../FlashMessages/action";
import FlashMessageRecord from "./../../FlashMessage/record";
import {firstTemplateById} from "./../../Dashboard/action/dashboardEpics";

export const loadTemplateEpic: Epic = (action$: ActionsObservable, {getState}: Store, {api}: Options): ActionsObservable =>
    action$.ofType(SELECT_TEMPLATE)
        .switchMap(({selectedTemplateId}) => api
            .loadItems$(selectedTemplateId || getState().dashboard.selectedTemplateId)
            .flatMap((items) => [
                setItems(items),
                setTemplateName(firstTemplateById(getState(), selectedTemplateId).name),
            ])
        );

export const showSaveEpic: Epic = (action$: ActionsObservable): ActionsObservable =>
    action$.filter(({type}) => inArray(type, [RESIZE, SET_POSITION, SET_REFRESH_RATE]))
        .debounceTime(200)
        .map(({payload}) =>
            showSave(payload.id)
        );

export const saveItemEpic: Epic = (action$: ActionsObservable, {getState}: Store, {api}: Options): ActionsObservable =>
    action$.ofType(SAVE)
        .switchMap(({item}) => api
            .saveItem$(getState().template.id, item)
            .map(() => {
                // todo - make flashmessages as markdown and use markdown->react transformation lib
                const message = ['Item ', <strong>{item.name}</strong>, ' was updated successfully.'];

                return addFlashMessage(new FlashMessageRecord({message}));
            })
        );
