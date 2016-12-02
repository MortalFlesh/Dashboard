import Loader from "./loader";
import {getApiUrl, getApiVersion} from "./../dashboardApp/store";

class Api {
    constructor(loader, urlGetter, versionGetter) {
        this.loader = loader;
        this.urlGetter = urlGetter;
        this.versionGetter = versionGetter;

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
        this.loader.get(this._getUrl() + path, done);
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

    loadTemplateName(templateId, done) {
        this._getData(`/template/${templateId}/name/`, done);
    }

    loadItems(templateId, done) {
        this._getData(`/template/${templateId}/item/list/`, done)
    }

    saveItem(templateId, item, done) {
        this._postData(
            `/template/${templateId}/item/`,
            {
                item: item.toJSON(),
            },
            (response) => {
                // todo - handleError
                done(response.id);
            }
        );
    }

    /**
     * @param path : string
     * @param data : object
     * @param done : function
     * @private
     */
    _postData(path, data, done) {
        this.loader.post(this._getUrl() + path, data, done);
    }

    saveTemplate(template, done) {
        this._postData(
            `/template/`,
            {
                name: template.name,
            },
            (response) => {
                // todo - handleError
                done(response.id);
            }
        );
    }
}

export default new Api(Loader, getApiUrl, getApiVersion);
