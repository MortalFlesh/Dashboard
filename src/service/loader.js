import {Observable} from "rxjs";

export default class Loader {
    constructor(jQuery) {
        this.jQuery = jQuery;
    }

    /**
     * @param url : string
     * @returns {Observable}
     */
    get$(url) {
        return Observable.ajax({url, method: 'GET', responseType: 'json', crossDomain: true});
    }

    /**
     * @deprecated - use get$ instead (then remove jquery-browserify)
     * @param url : string
     * @returns {Promise}
     */
    get(url) {
        return new Promise((resolve, reject) => {
            this.jQuery.get(url)
                .done(resolve)
                .error((xhr, status, error) => {
                    reject({status, error});
                });
        });
    }

    /**
     * @deprecated - use post$ instead (then remove jquery-browserify)
     * @param url : string
     * @param data : object
     * @returns {Promise}
     */
    post(url, data) {
        return new Promise((resolve, reject) => {
            this.jQuery.post(url, data)
                .done(resolve)
                .error((xhr, status, error) => {
                    reject({status, error});
                })
        });
    }
}
