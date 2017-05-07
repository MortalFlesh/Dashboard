import AddTemplateReducer from "./../state/addTemplateState";

const initialState = new AddTemplateReducer();

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
