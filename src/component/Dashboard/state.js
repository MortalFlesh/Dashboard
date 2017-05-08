import {List, Record} from "immutable";
import TemplateRecord from "./../Template/record";

let defaultTemplate = new TemplateRecord();

export default new Record({
    templates: new List([defaultTemplate]),
    selectedTemplate: defaultTemplate,
    isShowAddTemplate: false,
    isShowAddItem: false,
});
