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
     * @param done : function
     * @private
     */
    _getDataOld(path, done) {
        this.loader.getOld(this._getUrl() + path, done);
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

    loadTemplateName(templateId, done) {
        this._getDataOld(`/template/${templateId}/name/`, done);
    }

    loadItems(templateId, done) {
        this._getDataOld(`/template/${templateId}/item/list/`, done)
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
