// @flow
import {fromJS} from "immutable";

type tConfig = {apiUrl: string, apiVersion: string};

export default class Config {
    config: tConfig;

    constructor(config: tConfig, configLocal: Object = {}) {
        this.config = fromJS(config)
            .merge(configLocal)
            .toJS();
    }

    getConfig(): tConfig {
        return this.config;
    }

    getApiUrl(): string {
        const {apiUrl, apiVersion} = this.getConfig();

        return `${apiUrl}/${apiVersion}`;
    }
}
