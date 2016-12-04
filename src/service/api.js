import Loader from "./loader";
import {getApiUrl, getApiVersion} from "./../dashboardApp/store";

class Api {
    constructor(loader, urlGetter, versionGetter) {
        this.loader = loader;
        this.urlGetter = urlGetter;
        this.versionGetter = versionGetter;

        this.url = null;
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
        return this.loader.get(this.getUrl() + path);
    }

    /**
     * @returns {string}
     * @private
     */
    getUrl() {
        if (!this.url) {
            this.url = `${this.urlGetter()}/${this.versionGetter()}`;
        }

        return this.url;
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
        return this.loader.post(this.getUrl() + path, data);
    }

    saveTemplate(template) {
        return this.postData('/template/', {name: template.name})
            .then(({id}) => id);
    }
}

export default new Api(Loader, getApiUrl, getApiVersion);
