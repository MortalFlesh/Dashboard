import {List} from 'immutable';
import * as actions from "./actions";
import {setToDashboard, getFlashMessages} from "./../dashboardApp/store";
import dispatcher from "./../lib/dispatcher";
import FlashMessageRecord from "./flashMessageRecord";
import {createDelay} from './../service/timer';

let clearDelay = createDelay();

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch (action) {
        case actions.addFlashMessage:
            let messages = new List(getFlashMessages());
            messages = messages.push(new FlashMessageRecord(data));
            setToDashboard('flashMessages', messages);

            clearDelay(actions.clearFlashMessages, 2200);

            break;

        case actions.clearFlashMessages:
            setToDashboard('flashMessages', new List());
            break;
    }
});
