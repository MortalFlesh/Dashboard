import dispatcher from './../lib/dispatcher';

export function showAddItem(show: bool) {
    dispatcher.dispatch(showAddItem, show);
}
