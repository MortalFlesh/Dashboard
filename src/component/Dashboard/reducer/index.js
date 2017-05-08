import {combineReducers} from "redux";
import dashboard from "./dashboardReducer";
import addTemplate from "./../../AddTemplateForm/reducer";
import addItem from "./../../AddItemForm/reducer";

export default combineReducers({
    dashboard,
    addTemplate,
    addItem,
});
