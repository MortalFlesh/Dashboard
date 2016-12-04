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
        return this._getData('/template/list/')
            .then(({templates}) => templates);
    }

    /**
     * @param path : string
     * @returns {Promise}
     * @private
     */
    _getData(path) {
        return this.loader.get(this._getUrl() + path);
    }

    /**
     * @returns {string}
     * @private
     */
    _getUrl() {
        if (!this.url) {
            this.url = `${this.urlGetter()}/${this.versionGetter()}`;
        }

        return this.url;
    }

    loadTemplateName(templateId) {
        return this._getData(`/template/${templateId}/name/`)
            .then(({name}) => name);
    }

    loadItems(templateId) {
        return this._getData(`/template/${templateId}/item/list/`)
            .then(({items}) => items);
    }

    saveItem(templateId, item) {
        return this._postData(`/template/${templateId}/item/`, {item: item.toJSON()})
            .then(({id}) => id);
    }

    /**
     * @param path : string
     * @param data : object
     * @returns {Promise}
     * @private
     */
    _postData(path, data) {
        return this.loader.post(this._getUrl() + path, data);
    }

    saveTemplate(template) {
        return this._postData('/template/', {name: template.name})
            .then(({id}) => id);
    }
}

export default new Api(Loader, getApiUrl, getApiVersion);
