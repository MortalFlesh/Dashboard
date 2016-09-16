import Loader from "./loader";
import {getApiUrl} from './../dashboardApp/store';

class Api {
    constructor(loader, urlGetter) {
        this.loader = loader;
        this.urlGetter = urlGetter;
        this.url = null;
    }

    loadTemplates(done) {
        this._getData('/template/list/', done);
    }

    _getData(path, done) {
        this.url = this.url || this.urlGetter();

        this.loader.loadJson(this.url + path, 'GET', done);
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

    saveTemplate(template) {
        // todo saves a template to api POST:template/
        console.log('API<POST>: /template/', template);

        return 666;   // todo - new templateId
    }
}

export default new Api(Loader, getApiUrl);
