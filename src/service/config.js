import Immutable from "immutable";

export default class Config {
    constructor(config, configLocal = {}) {
        this.config = Immutable
            .fromJS(config)
            .merge(configLocal)
            .toJS();
    }

    getConfig() {
        return this.config;
    }

    getApiUrl() {
        const {apiUrl, apiVersion} = this.getConfig();

        return `${apiUrl}/${apiVersion}`;
    }
}
