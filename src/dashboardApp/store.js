import {List} from 'immutable';
import dispatcher from './../lib/dispatcher';
import * as actions from './actions';
import {dashboardCursor} from './state';

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch (action) {
        case actions.addMessage:
            let items = new List(getItems());

            items = items.push(new MessageRecord(data));

            setToDashboard('items', items);
            break;
    }
});

function setToDashboard(name, value) {
    dashboardCursor((dashboard) => dashboard.set(name, value));
}

export function getItems() {
    return dashboardCursor().get('items');
}
