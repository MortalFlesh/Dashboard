import Loader from "./loader";
import {getApiUrl} from "./../dashboardApp/store";

class Api {
    constructor(loader, urlGetter) {
        this.loader = loader;
        this.urlGetter = urlGetter;
        this.url = null;
    }

    loadTemplates(done) {
        this._getData('/template/list/', done);
    }

    /**
     * @param path : string
     * @param done : function
     * @private
     */
    _getData(path, done) {
        this.loader.getJson(this._getUrl() + path, done);
    }

    /**
     * @returns {string}
     * @private
     */
    _getUrl() {
        if (!this.url) {
            this.url = this.url || this.urlGetter();
        }

        return this.url;
    }

    loadTemplateName(templateId, done) {
        this._getData(`/template/${templateId}/name/`, done);
    }

    loadItems(templateId, done) {
        this._getData(`/template/${templateId}/item/list/`, done)
    }

    saveItem(templateId, item) {
        // todo saves an item to api POST:template/{id}/item/
        console.log(`API<POST>: /template/${templateId}/item/`, item);

        return 666;   // todo - new itemId
    }

    /**
     * @param path : string
     * @param data : object
     * @param done : function
     * @private
     */
    _postData(path, data, done) {
        this.loader.postJson(this._getUrl() + path, data, done);
    }

    saveTemplate(template, done) {
        this._postData(
            `/template/`,
            {
                name: template.name,
            },
            (response) => {
                done(response.id);
            }
        );
    }
}

export default new Api(Loader, getApiUrl);
