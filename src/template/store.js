import * as actions from './actions';
import {setToDashboard} from './../dashboardApp/store';
import dispatcher from './../lib/dispatcher';

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch(action) {
        case actions.showAddItem:
            setToDashboard('showAddItem', data ? true : false);
            break;
    }
});
