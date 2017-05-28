import {List} from "immutable";
import TemplateRecord from "../component/Template/record";
import ItemRecord from "./../component/Item/record";

export default class Api {
    constructor(loader, config) {
        this.loader = loader;
        this.url = config.getApiUrl();
    }

    loadTemplates$() {
        return this.getData$('/template/list/')
            .map(({templates}) => new List(templates.map((template) => new TemplateRecord(template))));
    }

    /**
     * @param path : string
     * @returns {Observable}
     * @private
     */
    getData$(path) {
        return this.loader.get$(this.url + path)
            .map(({response}) => response);
    }

    /**
     * @param path : string
     * @returns {Promise}
     * @private
     */
    getData(path) {
        return this.loader.get(this.url + path);
    }

    // todo remove?
    loadTemplateName(templateId) {
        return this.getData(`/template/${templateId}/name/`)
            .then(({name}) => name);
    }

    loadItems$(templateId) {
        return this.getData$(`/template/${templateId}/item/list/`)
            .map(({items}) => new List(items.map((item) => new ItemRecord(item))));
    }

    /**
     * @param path : string
     * @param data : object
     * @returns {Promise}
     * @private
     */
    postData(path, data) {
        return this.loader.post(this.url + path, data);
    }

    saveItem$(templateId, item) {
        return this.postData$(`/template/${templateId}/item/`, {item: item.toJSON()})
            .map(({id}) => id);
    }

    /**
     * @param path : string
     * @param data : object
     * @returns {Observable}
     * @private
     */
    postData$(path, data) {
        return this.loader.post$(this.url + path, JSON.stringify(data))
            .map(({response}) => response);
    }

    saveTemplate(template) {
        return this.postData('/template/', {name: template.name})
            .then(({id}) => id);
    }
}
