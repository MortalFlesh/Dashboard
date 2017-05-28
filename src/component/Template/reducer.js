import {
    LOAD_TEMPLATE,
    RESIZE,
    SAVE,
    SET_ITEMS,
    SET_MOVING,
    SET_POSITION,
    SET_REFRESH_RATE,
    SET_TEPLATE_NAME,
    SHOW_SAVE
} from "./constant";
import {ITEM_SAVED} from "./../AddItemForm/constant";
import {SELECT_TEMPLATE} from "./../Dashboard/constant";
import TemplateRecord from "./record";
import MovingRecord from "./../Item/record/movingRecord";

const initialState = new TemplateRecord({name: 'Loading...'});

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TEMPLATE:
            return action.template;

        case SELECT_TEMPLATE:
            return state.set('id', action.selectedTemplateId);

        case SET_TEPLATE_NAME:
            return state.set('name', action.name);

        case SET_ITEMS:
            return state.set('items', action.items);

        case SET_MOVING:
            return state.set('items', mapItems(state, action, ({id}) => new MovingRecord({id})));

        case SET_POSITION:
        case RESIZE:
        case SET_REFRESH_RATE:
            return state.set('items', mapItems(state, action));

        case SHOW_SAVE:
            return state.set('items', mapItems(state, showSavePayload(action.payload, true)));

        case SAVE:
            return state.set('items', mapItems(state, showSavePayload(action.item.id, false)));

        case ITEM_SAVED:
            return state.set('items', state.items.push(action.item));

        default:
            return state;
    }
};

const mapItems = ({items}, {payload}, forOthers = (item) => item) =>
    items.map((item) =>
        item.merge(item.id === payload.id ? payload : forOthers(item))
    );

const showSavePayload = (id, isShowSaveButton) => (
    {payload: {id, isShowSaveButton}}
);
