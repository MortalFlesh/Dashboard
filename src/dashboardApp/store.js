import {List} from 'immutable';
import './../item/store';
import './../addItem/store';
import './../addTemplate/store';
import api from './../lib/api';
import dispatcher from './../lib/dispatcher';

import * as actions from './actions';
import {addItem} from './../addItem/actions';
import {addTemplate} from './../addTemplate/actions';

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
            _setItems(data);
            break;

        case actions.setTemplates:
            _setTemplates(data);
            break;

        case actions.showAddItem:
            setToDashboard('showAddItem', data ? true : false);
            break;

        case actions.showAddTemplate:
            setToDashboard('showAddTemplate', data ? true : false);
            break;

        case addItem:
            _addItem();
            break;

        case addTemplate:
            _addTemplate();
            break;
    }
});

function _setItems(data) {
    let items = new List();

    data.forEach((item) => {
        items = items.push(new ItemRecord(item));
    });

    setToDashboard('items', items);
}

function _setTemplates(data) {
    let templates = new List();

    data.forEach((template) => {
        templates = templates.push(new TemplateRecord(template));
    });

    setToDashboard('templates', templates);
}

function _addItem() {
    const defaultItem = new ItemRecord();
    let items = new List(getItems());
    let newItem = getAddItem();

    newItem = newItem.set('id', items.count() + 1); // todo - temporary

    api.saveItem(getSelectedTemplate(), newItem);
    items = items.push(newItem);

    setToDashboard('items', items);

    setToDashboard('addItemSuccess', true);
    setTimeout(() => {
        setToDashboard('addItemSuccess', false);
    }, 2200);

    setToDashboard('addItemName', defaultItem.name);
    setToDashboard('addItemUrl', defaultItem.url);
    setToDashboard('addItemRefreshRate', defaultItem.refreshRate);
    setToDashboard('addItemHeight', defaultItem.height);
    setToDashboard('addItemWidth', defaultItem.width);
}

function _addTemplate() {
    const defaultTemplate = new TemplateRecord();
    let templates = new List(getTemplates());
    let newTemplate = getAddTemplate();

    newTemplate = newTemplate.set('id', templates.count() + 1); // todo - temporary

    api.saveTemplate(newTemplate);
    templates = templates.push(newTemplate);

    setToDashboard('templates', templates);

    setToDashboard('addTemplateSuccess', true);
    setTimeout(() => {
        setToDashboard('addTemplateSuccess', false);
    }, 2200);

    setToDashboard('addTemplateName', defaultTemplate.name);
}

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

export function isShowAddTemplate() {
    return dashboardCursor().get('showAddTemplate');
}

export function isAddItemSuccess() {
    return dashboardCursor().get('addItemSuccess');
}

export function isAddTemplateSuccess() {
    return dashboardCursor().get('addTemplateSuccess');
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
