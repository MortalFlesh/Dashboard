import {List, Record} from "immutable";
import TemplateRecord from "./../../../template/templateRecord";

let defaultTemplate = new TemplateRecord();

export default new Record({
    flashMessages: new List(),
    templates: new List([defaultTemplate]),
    selectedTemplate: defaultTemplate,
    showAddTemplate: false,
    showAddItem: false,
});
