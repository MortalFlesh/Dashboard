import * as actions from "./actions";
import {setToDashboard} from "./../dashboardApp/store";
import dispatcher from "./../lib/dispatcher";

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch (action) {
        case actions.setAddItemName:
            setToDashboard('addItemName', data);
            break;

        case actions.setAddItemUrl:
            setToDashboard('addItemUrl', data);
            break;

        case actions.setAddItemRefreshRate:
            setToDashboard('addItemRefreshRate', number(data));
            break;

        case actions.setAddItemHeight:
            setToDashboard('addItemHeight', number(data));
            break;

        case actions.setAddItemWidth:
            setToDashboard('addItemWidth', number(data));
            break;
    }
});

function number(data) {
    return parseInt(data, 10);
}