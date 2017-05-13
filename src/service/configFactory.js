import Config from "./config";

export default class ConfigFactory {
    createConfig() {
        const configuration = {
            apiUrl: 'http://dashboard-api',
            apiVersion: 'dev',
        };
        const configurationLocal = {
            apiUrl: 'http://dashboard-api/app_dev.php',
        };

        return new Config(configuration, configurationLocal);
    }
}
