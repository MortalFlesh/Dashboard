// @flow
import type {ActionsObservable, Epic, Options} from "redux-observable";
import type {Store} from "./../../../flow/types";

import {SAVE} from "./../constant";
import {itemSaved} from "./addItemActions";
import {addFlashMessage} from "./../../FlashMessages/action";
import FlashMessageRecord from "./../../FlashMessage/record";

export const saveEpic: Epic = (action$: ActionsObservable, {getState}: Store, {api}: Options): ActionsObservable =>
    action$.ofType(SAVE)
        .switchMap(({item}) => api
            .saveItem$(getState().template.id, item)
            .flatMap((id) => [
                itemSaved(item.set('id', id)),
                addFlashMessage(new FlashMessageRecord({message: 'New item successfully saved!'}))
            ])
        );
