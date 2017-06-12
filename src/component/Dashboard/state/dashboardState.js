import {List, Record} from "immutable";
import TemplateRecord from "../../Template/record";

const defaultTemplate = new TemplateRecord({name: 'Loading...'});

export default new Record({
    templates: new List([defaultTemplate]),
    selectedTemplateId: defaultTemplate.id,
    isShowAddTemplate: false,
    isShowAddItem: false,
});
