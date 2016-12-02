import {List} from 'immutable';
import * as actions from './actions';
import {setToDashboard, getItems} from './../dashboardApp/store';
import dispatcher from './../lib/dispatcher';
import ItemRecord from './../item/itemRecord';

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch (action) {
        case actions.setMoving:
            moving(data);
            showSaveButton();
            break;

        case actions.setItemPosition:
            changingPosition(data);
            showSaveButton();
            break;

        case actions.resizeItem:
            resize(data);
            showSaveButton();
            break;
    }
});

function showSaveButton() {
    // todo sets information to global state which show the button (click -> save template items -> API)
    console.log('showSaveButton');
}

function moving(data) {
    const {id, isMoving, innerX, innerY} = data;
    const currentItems = new List(getItems());
    let itemsUpdated = new List();

    currentItems.forEach((item) => {
        let itemUpdated = item;

        let isItemMoving = false;
        let x = 0;
        let y = 0;

        if (item.id === id) {
            isItemMoving = isMoving;
            x = innerX;
            y = innerY;
        }

        itemUpdated = itemUpdated.set('isMoving', isItemMoving);
        itemUpdated = itemUpdated.set('innerX', x);
        itemUpdated = itemUpdated.set('innerY', y);

        itemsUpdated = itemsUpdated.push(new ItemRecord(itemUpdated));
    });

    setToDashboard('items', itemsUpdated);
}

function changingPosition({id, top, left}) {
    const currentItems = new List(getItems());
    let itemsUpdated = new List();

    currentItems.forEach((item) => {
        let itemUpdated = item;

        if (item.id === id) {
            itemUpdated = itemUpdated.set('top', top);
            itemUpdated = itemUpdated.set('left', left);
        }

        itemsUpdated = itemsUpdated.push(new ItemRecord(itemUpdated));
    });

    setToDashboard('items', itemsUpdated);
}

function resize({id, height, width}) {
    const currentItems = new List(getItems());
    let itemsUpdated = new List();

    currentItems.forEach((item) => {
        let itemUpdated = item;

        if (item.id === id) {
            itemUpdated = itemUpdated.set('height', height);
            itemUpdated = itemUpdated.set('width', width);
        }

        itemsUpdated = itemsUpdated.push(new ItemRecord(itemUpdated));
    });

    setToDashboard('items', itemsUpdated);
}
