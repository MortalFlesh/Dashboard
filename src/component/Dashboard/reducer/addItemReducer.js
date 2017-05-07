import AddItemReducer from "./../state/addItemState";

const initialState = new AddItemReducer();

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
