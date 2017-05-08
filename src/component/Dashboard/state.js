import {List, Record} from "immutable";
import TemplateRecord from "./../Template/record";

let defaultTemplate = new TemplateRecord({name: 'Loading...'});

export default new Record({
    templates: new List([defaultTemplate]),
    selectedTemplate: defaultTemplate,
    isShowAddTemplate: false,
    isShowAddItem: false,
});
