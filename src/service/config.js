import Immutable from "immutable";

let config = {
    apiUrl: 'http://dashboard-api',
    apiVersion: 'dev',
};
let configLocal = {
    apiUrl: 'http://dashboard-api/app_dev.php',
};

/**
 * todo
 * - zkusit jeste nacitat config json (prevedeny z yml pri buildu) primo v index.html)
 * - jak vyresit, aby config_local.yml prepsal config ale nemusel existovat
 */

class Config {
    constructor(config, configLocal) {
        this.config = config;
        this.configLocal = configLocal;
    }

    getConfig() {
        return Immutable
            .fromJS(this.config)
            .merge(this.configLocal || {})
            .toJS()
    }
}

export default new Config(config, configLocal);
