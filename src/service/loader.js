// @flow
import {Observable} from "rxjs";

export default class Loader {
    get$(url: string): Observable {
        return Observable.ajax({url, method: 'GET', responseType: 'json', crossDomain: true});
    }

    post$(url: string, body: any): Observable {
        return Observable.ajax({url, body, method: 'POST', responseType: 'json', crossDomain: true});
    }
}
