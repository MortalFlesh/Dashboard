import {Observable} from "rxjs";
import React from "react";
import {inArray} from "./../../../service/utils";
import {SELECT_TEMPLATE} from "./../../Dashboard/constant";
import {RESIZE, SAVE, SET_POSITION} from "./../constant";
import {setItems, showSave} from "./../action";
import {addFlashMessage} from "./../../FlashMessages/action";
import FlashMessageRecord from "./../../FlashMessage/record";

export const loadItemsEpic = (action$, {getState}, {api}) =>
    action$.ofType(SELECT_TEMPLATE)
        .switchMap(({selectedTemplateId}) =>
            Observable.from(api.loadItems$(selectedTemplateId || getState().dashboard.selectedTemplateId))
                .map(setItems)
        );

export const showSaveEpic = (action$) =>
    action$.filter(({type}) => inArray(type, [RESIZE, SET_POSITION]))
        .debounceTime(200)
        .map(({payload}) =>
            showSave(payload.id)
        );

export const saveEpic = (action$, {getState}, {api}) =>
    action$.ofType(SAVE)
        .switchMap(({item}) =>
            Observable.from(api.saveItem$(getState().template.id, item))
                .map(() => {
                    const message = ['Item ', <strong>{item.name}</strong>, ' was updated successfully.'];

                    return addFlashMessage(new FlashMessageRecord({message}));
                })
        );
