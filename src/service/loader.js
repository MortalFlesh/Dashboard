import {Observable} from "rxjs";

export default class Loader {
    /**
     * @param url : string
     * @returns {Observable}
     */
    get$(url) {
        return Observable.ajax({url, method: 'GET', responseType: 'json', crossDomain: true});
    }

    /**
     * @param url : string
     * @param body : object
     * @returns {Observable}
     */
    post$(url, body) {
        return Observable.ajax({url, body, method: 'POST', responseType: 'json', crossDomain: true});
    }
}
