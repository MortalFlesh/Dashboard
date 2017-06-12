// @flow
import {number} from "./utils";

export default class SessionStorageService {
    sessionStorage: Object;

    constructor(sessionStorage: Object) {
        this.sessionStorage = sessionStorage;
    }

    set(key: string, value: any): void {
        this.sessionStorage.setItem(key, value);
    }

    get(key: string): any {
        return this.sessionStorage.getItem(key);
    }

    getNumber(key: string): number {
        return number(this.get(key));
    }
}
