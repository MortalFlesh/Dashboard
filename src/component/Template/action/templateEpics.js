import React from "react";
import {inArray} from "./../../../service/utils";
import {SELECT_TEMPLATE} from "./../../Dashboard/constant";
import {RESIZE, SAVE, SET_POSITION, SET_REFRESH_RATE} from "./../constant";
import {setItems, showSave, setTemplateName} from "./../action";
import {addFlashMessage} from "./../../FlashMessages/action";
import FlashMessageRecord from "./../../FlashMessage/record";

export const loadTemplateEpic = (action$, {getState}, {api}) =>
    action$.ofType(SELECT_TEMPLATE)
        .switchMap(({selectedTemplateId}) => api
            .loadItems$(selectedTemplateId || getState().dashboard.selectedTemplateId)
            .flatMap((items) => [
                setItems(items),
                setTemplateName(firstTemplateById(getState(), selectedTemplateId).name),
            ])
        );

// todo - duplicated function
function firstTemplateById({dashboard}, selectedId) {
    return dashboard.templates
        .filter((template) => template.id === selectedId)
        .first()
}

export const showSaveEpic = (action$) =>
    action$.filter(({type}) => inArray(type, [RESIZE, SET_POSITION, SET_REFRESH_RATE]))
        .debounceTime(200)
        .map(({payload}) =>
            showSave(payload.id)
        );

export const saveItemEpic = (action$, {getState}, {api}) =>
    action$.ofType(SAVE)
        .switchMap(({item}) => api
            .saveItem$(getState().template.id, item)
            .map(() => {
                // todo - make flashmessages as markdown and use markdown->react transformation lib
                const message = ['Item ', <strong>{item.name}</strong>, ' was updated successfully.'];

                return addFlashMessage(new FlashMessageRecord({message}));
            })
        );
