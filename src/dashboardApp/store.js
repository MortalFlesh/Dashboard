import {List} from 'immutable';
import dispatcher from './../lib/dispatcher';
import * as actions from './actions';
import * as itemActions from './../item/actions';
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

        case itemActions.setMoving:
            const {id, isMoving} = data;
            const currentItems = new List(getItems());
            let itemsUpdated = new List();

            currentItems.forEach((item) => {
                let itemUpdated = item;
                const isItemMoving = (item.id === id ? isMoving : false);

                itemUpdated = itemUpdated.set('isMoving', isItemMoving);

                itemsUpdated = itemsUpdated.push(new ItemRecord(itemUpdated));
            });

            console.log(currentItems.toJS(), itemsUpdated.toJS());

            setToDashboard('items', itemsUpdated);
            break;

        case actions.addItem:
            // todo implement
            //let items = new List(getItems());

            //items = items.push(new MessageRecord(data));

            //setToDashboard('items', items);
            break;
    }
});

function setToDashboard(name, value) {
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
