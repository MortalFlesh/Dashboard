import AddItemState from "./state";
import {SET_HEIGHT, SET_NAME, SET_REFRESH_RATE, SET_URL, SET_WIDTH} from "./constant";

const initialState = new AddItemState();

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return state.setIn(['item', 'name'], action.name);

        case SET_URL:
            return state.setIn(['item', 'url'], action.url);

        case SET_REFRESH_RATE:
            return state.setIn(['item', 'refreshRate'], action.refreshRate);

        case SET_HEIGHT:
            return state.setIn(['item', 'height'], action.height);

        case SET_WIDTH:
            return state.setIn(['item', 'width'], action.width);

        default:
            return state;
    }
};
