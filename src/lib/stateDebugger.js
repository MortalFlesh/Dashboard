import dispatcher from "./dispatcher";
import state from "./../dashboardApp/state";
import {addFlashMessage, clearFlashMessages} from "./../flashMessage/actions";

window.dashboard = window.dashboard || {};
const debug = window.dashboard.debug = {};

let token;
debug.logStart = () => {
    if (token) {
        return 'Already logging';
    }

    token = dispatcher.register(({action, data}) => {
        data = (data && data.toJS) ? data.toJS() : data;
        console.log(action.name, data);
    });

    return 'Logging started';
};

debug.logStop = () => {
    if (token) {
        dispatcher.unregister(token);
        token = null;

        return 'Logging stopped';
    }
};

debug.getState = () => {
    return state.get().toJS();
};

debug.getRawState = () => {
    return state.get();
};

debug.flash = {
    addSuccess(message) {
        addFlashMessage({type: 'success', message});
    },

    clearMessages() {
        clearFlashMessages();
    }

};
