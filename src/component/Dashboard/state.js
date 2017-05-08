import {List, Record} from "immutable";
import TemplateRecord from "./../../template/templateRecord";

let defaultTemplate = new TemplateRecord();

export default new Record({
    templates: new List([defaultTemplate]),
    selectedTemplate: defaultTemplate,
    isShowAddTemplate: false,
    isShowAddItem: false,
});
