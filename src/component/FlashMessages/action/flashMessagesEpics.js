// @flow
import type {ActionsObservable, Epic} from "redux-observable";

import {ADD} from "./../constant";
import {clearFlashMessages} from "./flashMessagesActions";

export const clearFlashmessagesEpic: Epic = (action$: ActionsObservable): ActionsObservable =>
    action$.ofType(ADD)
        .debounceTime(3000)
        .map(clearFlashMessages);
