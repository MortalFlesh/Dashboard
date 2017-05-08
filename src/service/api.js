export default class Api {
    constructor(loader, config) {
        this.loader = loader;
        this.url = config.getApiUrl();
    }

    loadTemplates() {
        return this.getData('/template/list/')
            .then(({templates}) => templates);
    }

    /**
     * @param path : string
     * @returns {Promise}
     * @private
     */
    getData(path) {
        return this.loader.get(this.url + path);
    }

    loadTemplateName(templateId) {
        return this.getData(`/template/${templateId}/name/`)
            .then(({name}) => name);
    }

    loadItems(templateId) {
        return this.getData(`/template/${templateId}/item/list/`)
            .then(({items}) => items);
    }

    saveItem(templateId, item) {
        return this.postData(`/template/${templateId}/item/`, {item: item.toJSON()})
            .then(({id}) => id);
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

    saveTemplate(template) {
        return this.postData('/template/', {name: template.name})
            .then(({id}) => id);
    }
}
