import {combineReducers} from "redux";
import dashboard from "./dashboardReducer";
import addTemplate from "./addTemplateReducer";
import addItem from "./addItemReducer";

export default combineReducers({
    dashboard,
    addTemplate,
    addItem,
});
