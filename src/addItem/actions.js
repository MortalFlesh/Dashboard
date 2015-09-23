import dispatcher from './../lib/dispatcher';

export function setAddItemName(name: string) {
    dispatcher.dispatch(setAddItemName, name);
}

export function setAddItemUrl(url: string) {
    dispatcher.dispatch(setAddItemUrl, url);
}

export function setAddItemRefreshRate(refreshRate: number) {
    dispatcher.dispatch(setAddItemRefreshRate, refreshRate);
}

export function setAddItemHeight(height: number) {
    dispatcher.dispatch(setAddItemHeight, height);
}

export function setAddItemWidth(width: number) {
    dispatcher.dispatch(setAddItemWidth, width);
}

export function addItem() {
    dispatcher.dispatch(addItem);
}
