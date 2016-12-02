import dispatcher from './../../lib/dispatcher';
import * as actions from './../../dashboardApp/actions';

import SessionStorage from './sessionStorageService';

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch(action) {
        case actions.setSelectedTemplate:
            SessionStorage.set('selectedTemplate', data);
            break;
    }
});

export function getSelectedTemplate() {
    return SessionStorage.get('selectedTemplate');
}
