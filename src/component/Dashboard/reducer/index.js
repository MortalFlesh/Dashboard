import {combineReducers} from "redux";
import dashboard from "./dashboardReducer";
import addTemplate from "./../../AddTemplateForm/reducer";
import addItem from "./../../AddItemForm/reducer";
import template from "./../../Template/reducer";
import flashMessage from "./../../FlashMessages/reducer";

export default combineReducers({
    flashMessage,
    dashboard,
    addTemplate,
    template,
    addItem,
});
