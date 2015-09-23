import {List} from 'immutable';
import './../item/store';
import './../template/store';
import './../addItem/store';
import dispatcher from './../lib/dispatcher';
import * as actions from './actions';
import * as itemActions from './../item/actions';
import {addItem} from './../addItem/actions';
import {dashboardCursor} from './state';
import TemplateRecord from './../template/templateRecord';
import ItemRecord from './../item/itemRecord';

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch (action) {
        case actions.setSelectedTemplate:
            setToDashboard('selectedTemplate', data);
            break;

        case actions.setTemplateName:
            setToDashboard('templateName', data);
            break;

        case actions.setItems:
            let items = new List();

            data.forEach((item) => {
                items = items.push(new ItemRecord(item));
            });

            setToDashboard('items', items);
            break;

        case actions.setTemplates:
            let templates = new List();

            data.forEach((template) => {
                templates = templates.push(new TemplateRecord(template));
            });

            setToDashboard('templates', templates);
            break;

        case addItem:
            {
                const defaultItem = new ItemRecord();
                let items = new List(getItems());

                items = items.push(getAddItem());

                setToDashboard('items', items);

                setToDashboard('addItemName', defaultItem.name);
                setToDashboard('addItemUrl', defaultItem.url);
                setToDashboard('addItemRefreshRate', defaultItem.refreshRate);
                setToDashboard('addItemHeight', defaultItem.height);
                setToDashboard('addItemWidth', defaultItem.width);
            }
            break;
    }
});

export function setToDashboard(name, value) {
    dashboardCursor((dashboard) => dashboard.set(name, value));
}

export function getSelectedTemplate() {
    return dashboardCursor().get('selectedTemplate');
}

export function getTemplateName() {
    return dashboardCursor().get('templateName');
}

export function getItems() {
    return dashboardCursor().get('items');
}

export function getTemplates() {
    return dashboardCursor().get('templates');
}

export function isShowAddItem() {
    return dashboardCursor().get('showAddItem');
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
