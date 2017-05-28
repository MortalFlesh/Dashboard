import {applyMiddleware, createStore} from "redux";
import {createEpicMiddleware} from "redux-observable";
import {getService, TYPES} from "./../../service";
import {rootEpic} from "./action";
import rootReducer from "./reducer";

export function configureStore(initialState) {
    const epicMiddleware = createEpicMiddleware(rootEpic, {
        dependencies: {
            api: getService(TYPES.Api),
            sessionStorage: getService(TYPES.SessionStorage),
        }
    });
    const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

    return createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}


// ---- deprecated ----

// import React from "react";
// import {List} from "immutable";
// import "./../../flashMessage/store";
// import "./../../item/store";
// import "./../../addItem/store";
// import "./../../addTemplate/store";
// import api from "./../../service/api";
// import dispatcher from "./../../lib/dispatcher";
// import * as actions from "./actions";
// import {addFlashMessage} from "./../../flashMessage/actions";
// import FlashMessageRecord from "./../../flashMessage/flashMessageRecord";
// import {addItem} from "./../../addItem/actions";
// import {saveItem} from "./../../item/actions";
// import {addTemplate} from "./../../addTemplate/actions";
// import {dashboardCursor} from "./state";
// import TemplateRecord from "./../Template/record";
// import ItemRecord from "./../Item/record";

export const dispatchToken = ({action, data}) => {
    switch (action) {
        case addItem:
            _addItem();
            break;

        case saveItem:
            _saveItem(data);
            break;

        case addTemplate:
            _addTemplate();
            break;
    }
};

function _addItem() {
    let newItem = getAddItem();

    api.saveItem(getSelectedTemplate(), newItem).then((newItemId) => {
        newItem = newItem.set('id', newItemId);

        let items = new List(getItems());
        items = items.push(newItem);

        setToDashboard('items', items);
        addFlashMessage(new FlashMessageRecord({message: 'New item successfully saved!'}));

        const defaultItem = new ItemRecord();
        setToDashboard('addItemName', defaultItem.name);
        setToDashboard('addItemUrl', defaultItem.url);
        setToDashboard('addItemRefreshRate', defaultItem.refreshRate);
        setToDashboard('addItemHeight', defaultItem.height);
        setToDashboard('addItemWidth', defaultItem.width);
    });
}

function _addTemplate() {
    let newTemplate = getAddTemplate();

    api.saveTemplate(newTemplate).then((newTemplateId) => {
        newTemplate = newTemplate.set('id', newTemplateId);

        let templates = new List(getTemplates());
        templates = templates.push(newTemplate);

        setToDashboard('templates', templates);
        addFlashMessage(new FlashMessageRecord({message: 'New template successfully saved!'}));

        const defaultTemplate = new TemplateRecord();
        setToDashboard('addTemplateName', defaultTemplate.name);
    });
}

export function getAddItem() {
    return new ItemRecord({
        name: dashboardCursor().get('addItemName'),
        url: dashboardCursor().get('addItemUrl'),
        refreshRate: dashboardCursor().get('addItemRefreshRate'),
        height: dashboardCursor().get('addItemHeight'),
        width: dashboardCursor().get('addItemWidth'),
    });
}

export function getAddTemplate() {
    return new TemplateRecord({
        name: dashboardCursor().get('addTemplateName'),
    });
}
