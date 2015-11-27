import * as actions from './actions';
import {setToDashboard} from './../dashboardApp/store';
import dispatcher from './../lib/dispatcher';
import TemplateRecord from './../template/templateRecord';

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch(action) {
        case actions.setAddTemplateName:
            setToDashboard('addTemplateName', data);
            break;
    }
});
