import {number} from "./utils";

export default class SessionStorageService {
    constructor(sessionStorage) {
        this.sessionStorage = sessionStorage;
    }

    set(key, value) {
        this.sessionStorage.setItem(key, value);
    }

    get(key) {
        return this.sessionStorage.getItem(key);
    }

    getNumber(key) {
        return number(this.get(key));
    }
}
